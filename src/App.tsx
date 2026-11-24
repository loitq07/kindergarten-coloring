import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ColoringTemplate, ToolType, DrawingHistoryStep, SavedArtwork } from './types';
import { ALL_TEMPLATES, getTemplateById } from './data/templates';
import { sound } from './utils/sound';
import { 
  getSavedArtworks, 
  saveArtwork, 
  deleteSavedArtwork, 
  saveAutosave, 
  loadAutosave 
} from './utils/storage';

import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { ColorPicker } from './components/ColorPicker';
import { CanvasArea } from './components/CanvasArea';
import { StampsSelector } from './components/StampsSelector';
import { TemplateGalleryModal } from './components/TemplateGalleryModal';
import { MyArtGalleryModal } from './components/MyArtGalleryModal';
import { CelebrateModal } from './components/CelebrateModal';
import { ParentGuideModal } from './components/ParentGuideModal';

export const App: React.FC = () => {
  // App state
  const [currentTemplate, setCurrentTemplate] = useState<ColoringTemplate>(ALL_TEMPLATES[0]);
  const [currentTool, setCurrentTool] = useState<ToolType>('fill');
  const [currentColor, setCurrentColor] = useState<string>('#EF476F');
  const [brushSize, setBrushSize] = useState<number>(14);
  const [stayInsideLines, setStayInsideLines] = useState<boolean>(true);
  const [selectedStamp, setSelectedStamp] = useState<string>('⭐');

  // Coloring & Drawing State
  const [filledRegions, setFilledRegions] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<DrawingHistoryStep[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Gallery & Audio & Language
  const [savedArtworks, setSavedArtworks] = useState<SavedArtwork[]>([]);
  const [isMuted, setIsMuted] = useState<boolean>(sound.isMuted());
  const [lang, setLang] = useState<'vi' | 'en'>('vi');

  // Modals
  const [isTemplatesOpen, setIsTemplatesOpen] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [isCelebrateOpen, setIsCelebrateOpen] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isStampsOpen, setIsStampsOpen] = useState<boolean>(false);

  // References to Canvas & SVG for image synthesis & export
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const svgElementRef = useRef<SVGSVGElement | null>(null);

  // Load saved artworks on mount
  useEffect(() => {
    setSavedArtworks(getSavedArtworks());
  }, []);

  // Check autosave on template change
  useEffect(() => {
    const saved = loadAutosave(currentTemplate.id);
    if (saved) {
      setFilledRegions(saved.filledRegions || {});
    } else {
      setFilledRegions({});
    }

    // Reset history for new template
    setHistory([]);
    setHistoryIndex(-1);

    // Clear canvas
    const canvas = canvasElementRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [currentTemplate.id]);

  // Register canvas and svg references
  const handleRegisterCanvasRef = useCallback((canvas: HTMLCanvasElement | null, svg: SVGSVGElement | null) => {
    canvasElementRef.current = canvas;
    svgElementRef.current = svg;
  }, []);

  // Fill SVG region handler
  const handleFillRegion = useCallback((regionId: string, color: string) => {
    setFilledRegions(prev => {
      const updated = { ...prev, [regionId]: color };
      // Save history
      const canvas = canvasElementRef.current;
      const ctx = canvas?.getContext('2d');
      const imgData = canvas && ctx ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;

      const newStep: DrawingHistoryStep = {
        filledRegions: updated,
        canvasImageData: imgData
      };

      setHistory(h => {
        const sliced = h.slice(0, historyIndex + 1);
        return [...sliced, newStep];
      });
      setHistoryIndex(i => i + 1);

      // Autosave
      saveAutosave(currentTemplate.id, updated);
      return updated;
    });
  }, [currentTemplate.id, historyIndex]);

  // Push drawing history from Canvas strokes
  const handlePushHistory = useCallback((step: DrawingHistoryStep) => {
    setHistory(h => {
      const sliced = h.slice(0, historyIndex + 1);
      return [...sliced, step];
    });
    setHistoryIndex(i => i + 1);
    saveAutosave(currentTemplate.id, filledRegions);
  }, [currentTemplate.id, filledRegions, historyIndex]);

  // Undo
  const handleUndo = useCallback(() => {
    if (historyIndex <= 0) {
      // Revert to initial
      setFilledRegions({});
      const canvas = canvasElementRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setHistoryIndex(-1);
      return;
    }

    const prevIndex = historyIndex - 1;
    const targetStep = history[prevIndex];
    if (targetStep) {
      setFilledRegions(targetStep.filledRegions);
      const canvas = canvasElementRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (targetStep.canvasImageData) {
          ctx.putImageData(targetStep.canvasImageData, 0, 0);
        }
      }
      setHistoryIndex(prevIndex);
    }
  }, [history, historyIndex]);

  // Redo
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      const targetStep = history[nextIndex];
      if (targetStep) {
        setFilledRegions(targetStep.filledRegions);
        const canvas = canvasElementRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx && targetStep.canvasImageData) {
          ctx.putImageData(targetStep.canvasImageData, 0, 0);
        }
        setHistoryIndex(nextIndex);
      }
    }
  }, [history, historyIndex]);

  // Clear / Reset
  const handleClear = useCallback(() => {
    const confirmMsg = lang === 'vi' 
      ? 'Bé có chắc muốn vẽ lại từ đầu bức tranh này không?' 
      : 'Do you want to clear and start this picture fresh?';
    if (window.confirm(confirmMsg)) {
      setFilledRegions({});
      const canvas = canvasElementRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setHistory([]);
      setHistoryIndex(-1);
      saveAutosave(currentTemplate.id, {});
    }
  }, [currentTemplate.id, lang]);

  // Export composite HD image (SVG fills + Canvas strokes + Outlines)
  const generateCompositeDataUrl = useCallback((): Promise<string> => {
    return new Promise((resolve) => {
      const offscreen = document.createElement('canvas');
      offscreen.width = 1000;
      offscreen.height = 1000;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) {
        resolve('');
        return;
      }

      // 1. Fill white background
      offCtx.fillStyle = '#FFFFFF';
      offCtx.fillRect(0, 0, 1000, 1000);

      // If raster / image-based template, canvas holds the user colors, then overlay line-art with multiply
      if (currentTemplate.imageUrl) {
        const canvas = canvasElementRef.current;
        if (canvas) {
          offCtx.drawImage(canvas, 0, 0, 1000, 1000);
        }
        const lineImg = new Image();
        lineImg.crossOrigin = 'anonymous';
        lineImg.onload = () => {
          offCtx.globalCompositeOperation = 'multiply';
          offCtx.drawImage(lineImg, 0, 0, 1000, 1000);
          offCtx.globalCompositeOperation = 'source-over';
          resolve(offscreen.toDataURL('image/png'));
        };
        lineImg.onerror = () => {
          resolve(offscreen.toDataURL('image/png'));
        };
        lineImg.src = currentTemplate.imageUrl;
        return;
      }

      // 2. Render SVG fills
      const svg = svgElementRef.current;
      if (!svg) {
        resolve('');
        return;
      }

      const svgClone = svg.cloneNode(true) as SVGSVGElement;
      svgClone.setAttribute('width', '1000');
      svgClone.setAttribute('height', '1000');

      const xml = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
      const URLObj = window.URL || window.webkitURL || window;
      const blobUrl = URLObj.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        offCtx.drawImage(img, 0, 0, 1000, 1000);
        URLObj.revokeObjectURL(blobUrl);

        // 3. Render Canvas brush layer on top of fills
        const canvas = canvasElementRef.current;
        if (canvas) {
          offCtx.drawImage(canvas, 0, 0, 1000, 1000);
        }

        // 4. Render top outline lines with MULTIPLY so lines are ALWAYS on top
        const outlineImg = new Image();
        let outlineSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${currentTemplate.viewBox || '0 0 500 500'}" width="1000" height="1000">`;
        currentTemplate.regions.forEach(r => {
          outlineSvgStr += `<path d="${r.d}" fill="none" stroke="#1A1A1A" stroke-width="${r.strokeWidth ? r.strokeWidth * 1.5 : 5}" stroke-linecap="round" stroke-linejoin="round" />`;
        });
        outlineSvgStr += '</svg>';

        const outlineBlob = new Blob([outlineSvgStr], { type: 'image/svg+xml;charset=utf-8' });
        const outlineUrl = URLObj.createObjectURL(outlineBlob);

        outlineImg.onload = () => {
          offCtx.globalCompositeOperation = 'multiply';
          offCtx.drawImage(outlineImg, 0, 0, 1000, 1000);
          offCtx.globalCompositeOperation = 'source-over';
          URLObj.revokeObjectURL(outlineUrl);

          const finalDataUrl = offscreen.toDataURL('image/png');
          resolve(finalDataUrl);
        };
        outlineImg.onerror = () => {
          resolve(offscreen.toDataURL('image/png'));
        };
        outlineImg.src = outlineUrl;
      };
      img.onerror = () => {
        resolve('');
      };
      img.src = blobUrl;
    });
  }, [currentTemplate]);

  // Download artwork
  const handleDownload = useCallback(async () => {
    const dataUrl = await generateCompositeDataUrl();
    if (!dataUrl) return;

    // Also auto-save to gallery
    const newArt: SavedArtwork = {
      id: `art-${Date.now()}`,
      templateId: currentTemplate.id,
      title: lang === 'vi' ? currentTemplate.titleVi : currentTemplate.titleEn,
      date: Date.now(),
      thumbnailDataUrl: dataUrl,
      filledRegions: { ...filledRegions }
    };
    saveArtwork(newArt);
    setSavedArtworks(getSavedArtworks());

    // Trigger download
    const link = document.createElement('a');
    link.download = `Be-Tap-To-Mau-${currentTemplate.titleVi}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [currentTemplate, filledRegions, generateCompositeDataUrl, lang]);

  // Print outline sheet
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Load saved artwork from gallery
  const handleLoadArtwork = useCallback((art: SavedArtwork) => {
    const tmpl = getTemplateById(art.templateId);
    setCurrentTemplate(tmpl);
    setFilledRegions(art.filledRegions || {});
  }, []);

  // Delete saved artwork
  const handleDeleteArtwork = useCallback((id: string) => {
    deleteSavedArtwork(id);
    setSavedArtworks(getSavedArtworks());
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#FDF8F0] overflow-hidden select-none">
      {/* 1. Top Header */}
      <Header
        currentTemplate={currentTemplate}
        onOpenTemplates={() => setIsTemplatesOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenCelebrate={() => setIsCelebrateOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onPrint={handlePrint}
        onDownload={handleDownload}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(sound.toggleMute())}
        lang={lang}
        onToggleLang={() => setLang(l => (l === 'vi' ? 'en' : 'vi'))}
      />

      {/* 2. Main Middle Workspace */}
      <div className="flex-1 flex flex-col-reverse sm:flex-row overflow-hidden relative">
        {/* Left / Bottom Tools Panel */}
        <Toolbar
          currentTool={currentTool}
          onSelectTool={setCurrentTool}
          canUndo={historyIndex >= 0}
          canRedo={historyIndex < history.length - 1}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onClear={handleClear}
          onOpenStamps={() => setIsStampsOpen(true)}
          selectedStamp={selectedStamp}
          lang={lang}
        />

        {/* Center Drawing Canvas Area */}
        <CanvasArea
          template={currentTemplate}
          currentTool={currentTool}
          currentColor={currentColor}
          brushSize={brushSize}
          stayInsideLines={stayInsideLines}
          selectedStamp={selectedStamp}
          filledRegions={filledRegions}
          onFillRegion={handleFillRegion}
          onPushHistory={handlePushHistory}
          onRegisterCanvasRef={handleRegisterCanvasRef}
          lang={lang}
        />
      </div>

      {/* 3. Bottom Color Palette & Brush Sizer */}
      <ColorPicker
        currentColor={currentColor}
        onSelectColor={setCurrentColor}
        brushSize={brushSize}
        onChangeBrushSize={setBrushSize}
        stayInsideLines={stayInsideLines}
        onToggleStayInsideLines={() => setStayInsideLines(s => !s)}
        lang={lang}
      />

      {/* MODALS */}
      <TemplateGalleryModal
        isOpen={isTemplatesOpen}
        onClose={() => setIsTemplatesOpen(false)}
        onSelectTemplate={setCurrentTemplate}
        currentTemplateId={currentTemplate.id}
        lang={lang}
      />

      <MyArtGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        artworks={savedArtworks}
        onLoadArtwork={handleLoadArtwork}
        onDeleteArtwork={handleDeleteArtwork}
        lang={lang}
      />

      <CelebrateModal
        isOpen={isCelebrateOpen}
        onClose={() => setIsCelebrateOpen(false)}
        template={currentTemplate}
        onDownload={handleDownload}
        onPrint={handlePrint}
        onOpenTemplates={() => setIsTemplatesOpen(true)}
        lang={lang}
      />

      <ParentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        lang={lang}
      />

      <StampsSelector
        isOpen={isStampsOpen}
        onClose={() => setIsStampsOpen(false)}
        selectedStamp={selectedStamp}
        onSelectStamp={setSelectedStamp}
        lang={lang}
      />

      {/* Printable Area (Only shown when printing) */}
      <div className="hidden print:flex print-area items-center justify-center w-screen h-screen bg-white">
        {currentTemplate.imageUrl ? (
          <img src={currentTemplate.imageUrl} alt="Printable Coloring Sheet" className="max-w-[85vw] max-h-[85vh] object-contain" />
        ) : (
          <svg viewBox={currentTemplate.viewBox || "0 0 500 500"} className="w-[85vw] h-[85vh]">
            {currentTemplate.regions.map(r => (
              <path
                key={`print-${r.id}`}
                d={r.d}
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth={r.strokeWidth ? r.strokeWidth * 1.2 : 5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
};

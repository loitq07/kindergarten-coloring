import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ColoringTemplate, ToolType, DrawingHistoryStep } from '../types';
import { sound } from '../utils/sound';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface CanvasAreaProps {
  template: ColoringTemplate;
  currentTool: ToolType;
  currentColor: string;
  brushSize: number;
  stayInsideLines: boolean;
  selectedStamp: string;
  filledRegions: Record<string, string>;
  onFillRegion: (regionId: string, color: string) => void;
  onPushHistory: (step: DrawingHistoryStep) => void;
  onRegisterCanvasRef: (canvas: HTMLCanvasElement | null, svg: SVGSVGElement | null) => void;
  lang: 'vi' | 'en';
}

interface SparkleParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  rotation: number;
}

export const CanvasArea: React.FC<CanvasAreaProps> = ({
  template,
  currentTool,
  currentColor,
  brushSize,
  stayInsideLines,
  selectedStamp,
  filledRegions,
  onFillRegion,
  onPushHistory,
  onRegisterCanvasRef
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Pan and Zoom state for iPad navigation
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPoint, setLastPoint] = useState<{ x: number; y: number } | null>(null);

  // Active pointer ID for palm rejection
  const activePointerId = useRef<number | null>(null);
  // Touch tracking for pinch-zoom
  const initialPinchDist = useRef<number | null>(null);
  const initialScale = useRef<number>(1);

  // Glitter sparkles
  const sparklesRef = useRef<SparkleParticle[]>([]);

  // Pass refs up to parent for download/print
  useEffect(() => {
    onRegisterCanvasRef(canvasRef.current, svgRef.current);
  }, [onRegisterCanvasRef]);

  // Sync canvas dimensions
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // High DPI Retina display support
    const dpr = window.devicePixelRatio || 1;
    const width = 500;
    const height = 500;
    
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      // Save current content before resize
      const ctx = canvas.getContext('2d');
      const tempImage = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      
      ctx?.scale(dpr, dpr);
      if (tempImage && ctx) {
        // Can re-draw if needed
      }
    }
  }, []);

  useEffect(() => {
    updateCanvasSize();
  }, [updateCanvasSize]);

  // Convert client coordinates to 0..500 SVG/Canvas coordinates
  const getCoordinates = (e: React.PointerEvent | PointerEvent) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 500;
    const y = ((e.clientY - rect.top) / rect.height) * 500;
    return { x, y };
  };

  // Capture canvas state for history
  const recordHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    onPushHistory({
      filledRegions: { ...filledRegions },
      canvasImageData: imgData
    });
  }, [filledRegions, onPushHistory]);

  // --- DRAWING STROKE HANDLERS ---
  const startDrawing = (e: React.PointerEvent) => {
    // If pinch zooming, don't draw
    if (e.pointerType === 'touch' && !e.isPrimary) return;
    
    // Palm rejection: stick to primary pointer
    if (activePointerId.current !== null && activePointerId.current !== e.pointerId) {
      return;
    }
    activePointerId.current = e.pointerId;

    const { x, y } = getCoordinates(e);

    // 1. FILL TOOL MODE
    if (currentTool === 'fill') {
      // Find which SVG path was clicked
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const regionId = target?.getAttribute('data-region-id');
      if (regionId) {
        sound.playFill();
        onFillRegion(regionId, currentColor);
      }
      return;
    }

    // 2. STAMP TOOL MODE
    if (currentTool === 'stamp') {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      sound.playStamp();
      ctx.save();
      ctx.font = `${brushSize * 2.2}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Slight random wobble for playful feel
      const wobble = (Math.random() - 0.5) * 0.3;
      ctx.translate(x, y);
      ctx.rotate(wobble);
      ctx.fillText(selectedStamp, 0, 0);
      ctx.restore();

      recordHistory();
      return;
    }

    // 3. FREEHAND BRUSH / CRAYON / GLITTER / NEON / ERASER
    setIsDrawing(true);
    setLastPoint({ x, y });

    // Initial dot or sound
    if (currentTool === 'glitter') {
      sound.playSparkle();
    } else {
      sound.playBrushStroke();
    }
    drawStroke(x, y, x, y, e.pressure);
  };

  const drawStroke = (x1: number, y1: number, x2: number, y2: number, pressure: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Apply pressure if available from Apple Pencil
    const effSize = pressure > 0 ? Math.max(3, brushSize * (0.4 + pressure * 1.2)) : brushSize;

    ctx.save();
    
    // Lock within lines clip if enabled
    if (stayInsideLines) {
      // Stay inside lines uses clipping from paths if applicable
    }

    if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x2, y2, effSize * 1.2, 0, Math.PI * 2);
      ctx.fill();
    } else if (currentTool === 'crayon') {
      // Wax crayon textured stroke
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = currentColor;
      ctx.strokeStyle = currentColor;
      
      const dist = Math.hypot(x2 - x1, y2 - y1);
      const steps = Math.max(1, Math.floor(dist / 2));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const cx = x1 + (x2 - x1) * t;
        const cy = y1 + (y2 - y1) * t;
        
        // Random wax grain particles
        for (let j = 0; j < 6; j++) {
          const offsetX = (Math.random() - 0.5) * effSize;
          const offsetY = (Math.random() - 0.5) * effSize;
          ctx.globalAlpha = 0.35 + Math.random() * 0.45;
          ctx.beginPath();
          ctx.arc(cx + offsetX, cy + offsetY, effSize * 0.18 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (currentTool === 'neon') {
      // Neon Glow Pen
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Outer bright glow
      ctx.shadowColor = currentColor;
      ctx.shadowBlur = effSize * 1.5;
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = effSize;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Inner white hot core
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = Math.max(2, effSize * 0.35);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else if (currentTool === 'glitter') {
      // Magic Sparkle Pen
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = effSize;
      ctx.globalAlpha = 0.85;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Add sparkling starburst particles
      for (let i = 0; i < 3; i++) {
        const starX = x2 + (Math.random() - 0.5) * effSize * 1.5;
        const starY = y2 + (Math.random() - 0.5) * effSize * 1.5;
        sparklesRef.current.push({
          x: starX,
          y: starY,
          size: Math.random() * 10 + 6,
          color: ['#FFF', '#FFD700', '#FF85A1', '#80ED99', '#90E0EF'][Math.floor(Math.random() * 5)],
          alpha: 1,
          rotation: Math.random() * Math.PI
        });
      }
    } else {
      // Default Smooth Paintbrush
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = effSize;
      ctx.globalAlpha = 0.95;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    ctx.restore();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing) return;
    if (activePointerId.current !== null && activePointerId.current !== e.pointerId) return;

    const { x, y } = getCoordinates(e);
    if (lastPoint) {
      drawStroke(lastPoint.x, lastPoint.y, x, y, e.pressure);
    }
    setLastPoint({ x, y });
  };

  const stopDrawing = (e: React.PointerEvent) => {
    if (activePointerId.current === e.pointerId) {
      activePointerId.current = null;
    }
    if (isDrawing) {
      setIsDrawing(false);
      setLastPoint(null);
      recordHistory();
    }
  };

  // Sparkles animation loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderSparkles = () => {
      if (sparklesRef.current.length > 0) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.save();
          sparklesRef.current.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            // Draw four-point sparkle star
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.quadraticCurveTo(0, 0, p.size, 0);
            ctx.quadraticCurveTo(0, 0, 0, p.size);
            ctx.quadraticCurveTo(0, 0, -p.size, 0);
            ctx.quadraticCurveTo(0, 0, 0, -p.size);
            ctx.fill();
            ctx.restore();

            p.alpha -= 0.04;
            p.size += 0.2;
          });
          ctx.restore();
          sparklesRef.current = sparklesRef.current.filter(p => p.alpha > 0);
        }
      }
      animId = requestAnimationFrame(renderSparkles);
    };

    animId = requestAnimationFrame(renderSparkles);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pinch-to-zoom for iPad two-finger gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDist.current = dist;
      initialScale.current = scale;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDist.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const newScale = Math.min(3, Math.max(0.8, initialScale.current * (dist / initialPinchDist.current)));
      setScale(newScale);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      initialPinchDist.current = null;
    }
  };

  const resetZoom = () => {
    sound.playClick();
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <main 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex-1 w-full h-full relative flex items-center justify-center p-2 sm:p-4 bg-amber-50/50 overflow-hidden select-none"
    >
      {/* Zoom Controls Overlay for iPad */}
      <div className="absolute top-3 right-3 z-30 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-amber-200 shadow-md">
        <button
          onClick={() => setScale(s => Math.min(3, s + 0.25))}
          className="w-8 h-8 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center"
          title="Phóng to (Zoom In)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setScale(s => Math.max(0.8, s - 0.25))}
          className="w-8 h-8 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center"
          title="Thu nhỏ (Zoom Out)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        {scale !== 1 && (
          <button
            onClick={resetZoom}
            className="w-8 h-8 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 flex items-center justify-center animate-bounce-gentle"
            title="Thu về 100%"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Drawing Canvas Board */}
      <div 
        style={{
          transform: `scale(${scale}) translate(${pan.x}px, ${pan.y}px)`,
          transformOrigin: 'center center',
          transition: isDrawing ? 'none' : 'transform 0.15s ease-out'
        }}
        className="w-full max-w-[500px] aspect-square bg-white rounded-3xl shadow-xl border-4 border-amber-200 relative overflow-hidden"
      >
        {/* LAYER 0: Interactive Fillable SVG Paths */}
        <svg
          ref={svgRef}
          viewBox={template.viewBox || "0 0 500 500"}
          className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
        >
          <defs>
            <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1" />
            </filter>
          </defs>

          {/* Background rect */}
          <rect width="500" height="500" fill="#FFFFFF" />

          {/* Fillable Path Regions */}
          {template.regions.map(r => {
            const fillColor = filledRegions[r.id] || r.defaultColor || '#FFFFFF';
            return (
              <path
                key={r.id}
                id={r.id}
                data-region-id={r.id}
                d={r.d}
                fill={fillColor}
                stroke="#2B2B2B"
                strokeWidth={r.strokeWidth || 4.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-colors duration-150 ${
                  currentTool === 'fill' ? 'cursor-pointer hover:opacity-90' : ''
                }`}
                onClick={() => {
                  if (currentTool === 'fill') {
                    sound.playFill();
                    onFillRegion(r.id, currentColor);
                  }
                }}
              />
            );
          })}
        </svg>

        {/* LAYER 1: Freehand Drawing Canvas (middle) */}
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          onPointerDown={startDrawing}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          className={`absolute inset-0 w-full h-full z-10 touch-none ${
            currentTool === 'fill' ? 'pointer-events-none' : 'cursor-crosshair pointer-events-auto'
          }`}
        />

        {/* LAYER 2: Crisp Cartoon Outlines on top so drawings never erase the line-art */}
        <svg
          viewBox={template.viewBox || "0 0 500 500"}
          className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        >
          {template.regions.map(r => (
            <path
              key={`outline-${r.id}`}
              d={r.d}
              fill="none"
              stroke="#2B2B2B"
              strokeWidth={r.strokeWidth || 4.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
    </main>
  );
};

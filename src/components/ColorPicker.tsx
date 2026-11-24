import React, { useState } from 'react';
import { PALETTES } from '../data/categories';
import { sound } from '../utils/sound';
import { ShieldCheck, Pipette } from 'lucide-react';

interface ColorPickerProps {
  currentColor: string;
  onSelectColor: (color: string) => void;
  brushSize: number;
  onChangeBrushSize: (size: number) => void;
  stayInsideLines: boolean;
  onToggleStayInsideLines: () => void;
  lang: 'vi' | 'en';
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  currentColor,
  onSelectColor,
  brushSize,
  onChangeBrushSize,
  stayInsideLines,
  onToggleStayInsideLines,
  lang
}) => {
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);

  const sizes = [
    { labelVi: 'Nhỏ', labelEn: 'Small', size: 6, dotSize: 'w-2 h-2' },
    { labelVi: 'Vừa', labelEn: 'Medium', size: 14, dotSize: 'w-3.5 h-3.5' },
    { labelVi: 'To', labelEn: 'Big', size: 28, dotSize: 'w-5 h-5' },
    { labelVi: 'Đại', labelEn: 'Jumbo', size: 45, dotSize: 'w-7 h-7' }
  ];

  return (
    <div className="no-print bg-white/95 backdrop-blur-md border-t-2 border-amber-200 p-2 sm:p-3 px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 z-20 shrink-0 shadow-md">
      {/* Palette selector & Swatches */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Palette Tab Pills */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-0.5">
          {PALETTES.map((pal, idx) => (
            <button
              key={pal.nameVi}
              onClick={() => {
                sound.playClick();
                setActivePaletteIndex(idx);
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                activePaletteIndex === idx
                  ? 'bg-amber-400 text-amber-950 shadow-sm'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
              }`}
            >
              {lang === 'vi' ? pal.nameVi : pal.nameEn}
            </button>
          ))}
        </div>

        {/* Color Swatch Circles */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full p-1">
          {PALETTES[activePaletteIndex].colors.map(c => {
            const isSelected = currentColor.toLowerCase() === c.toLowerCase();
            return (
              <button
                key={c}
                onClick={() => {
                  sound.playPop();
                  onSelectColor(c);
                }}
                style={{ backgroundColor: c }}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 border-2 transition-all transform active:scale-90 ${
                  isSelected
                    ? 'border-white ring-4 ring-amber-400 scale-110 shadow-lg'
                    : 'border-black/15 hover:scale-105'
                }`}
                title={c}
              />
            );
          })}

          {/* Native HTML5 Color Picker for custom colors */}
          <label className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 bg-gradient-to-tr from-rose-500 via-amber-400 via-emerald-400 to-indigo-500 border-2 border-white shadow cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 relative" title={lang === 'vi' ? 'Chọn màu khác' : 'Custom color'}>
            <Pipette className="w-4 h-4 text-white drop-shadow" />
            <input
              type="color"
              value={currentColor}
              onChange={e => {
                sound.playPop();
                onSelectColor(e.target.value);
              }}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Brush Size & Stay in Lines Toggle */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Magic Stay inside lines toggle */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleStayInsideLines();
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold border-2 transition-all ${
            stayInsideLines
              ? 'bg-emerald-100 border-emerald-400 text-emerald-900 shadow-sm'
              : 'bg-gray-100 border-gray-300 text-gray-500'
          }`}
          title={lang === 'vi' ? 'Tô không lem ra ngoài đường viền' : 'Keep coloring inside borders'}
        >
          <ShieldCheck className={`w-4 h-4 ${stayInsideLines ? 'text-emerald-600' : 'text-gray-400'}`} />
          <span>{lang === 'vi' ? 'Giữ Trong Viền' : 'In Lines'}</span>
          <span className={`w-2 h-2 rounded-full ${stayInsideLines ? 'bg-emerald-500 animate-ping' : 'bg-gray-300'}`} />
        </button>

        {/* Brush Size Selector */}
        <div className="flex items-center gap-1 bg-amber-50 p-1 rounded-2xl border border-amber-200">
          {sizes.map(s => {
            const isSelected = brushSize === s.size;
            return (
              <button
                key={s.size}
                onClick={() => {
                  sound.playClick();
                  onChangeBrushSize(s.size);
                }}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
                    : 'hover:bg-amber-200 text-amber-900'
                }`}
                title={`${lang === 'vi' ? s.labelVi : s.labelEn} (${s.size}px)`}
              >
                <div
                  className={`${s.dotSize} rounded-full`}
                  style={{ backgroundColor: currentColor }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

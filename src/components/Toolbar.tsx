import React from 'react';
import { 
  PaintBucket, 
  Paintbrush, 
  Sparkles, 
  Sun, 
  Smile, 
  Eraser, 
  Undo2, 
  Redo2, 
  RotateCcw,
  Pencil
} from 'lucide-react';
import { ToolType } from '../types';
import { sound } from '../utils/sound';

interface ToolbarProps {
  currentTool: ToolType;
  onSelectTool: (tool: ToolType) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onOpenStamps: () => void;
  selectedStamp: string;
  lang: 'vi' | 'en';
}

export const Toolbar: React.FC<ToolbarProps> = ({
  currentTool,
  onSelectTool,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
  onOpenStamps,
  selectedStamp,
  lang
}) => {
  const tools = [
    {
      id: 'fill' as ToolType,
      nameVi: 'Đổ Màu',
      nameEn: 'Fill Bucket',
      descVi: 'Chạm mảng màu',
      icon: PaintBucket,
      color: 'bg-rose-500',
      border: 'border-rose-600',
      activeBg: 'bg-rose-100 border-rose-500 text-rose-700'
    },
    {
      id: 'crayon' as ToolType,
      nameVi: 'Bút Sáp',
      nameEn: 'Crayon',
      descVi: 'Nét sáp mịn',
      icon: Pencil,
      color: 'bg-amber-500',
      border: 'border-amber-600',
      activeBg: 'bg-amber-100 border-amber-500 text-amber-700'
    },
    {
      id: 'brush' as ToolType,
      nameVi: 'Cọ Lông',
      nameEn: 'Brush',
      descVi: 'Nét cọ mềm',
      icon: Paintbrush,
      color: 'bg-blue-500',
      border: 'border-blue-600',
      activeBg: 'bg-blue-100 border-blue-500 text-blue-700'
    },
    {
      id: 'glitter' as ToolType,
      nameVi: 'Kim Tuyến',
      nameEn: 'Glitter',
      descVi: 'Lấp lánh sao',
      icon: Sparkles,
      color: 'bg-purple-500',
      border: 'border-purple-600',
      activeBg: 'bg-purple-100 border-purple-500 text-purple-700'
    },
    {
      id: 'neon' as ToolType,
      nameVi: 'Dạ Quang',
      nameEn: 'Neon Glow',
      descVi: 'Phát sáng',
      icon: Sun,
      color: 'bg-lime-500',
      border: 'border-lime-600',
      activeBg: 'bg-lime-100 border-lime-500 text-lime-700'
    },
    {
      id: 'stamp' as ToolType,
      nameVi: 'Con Dấu',
      nameEn: 'Stamps',
      descVi: 'Dán hình cute',
      icon: Smile,
      color: 'bg-pink-500',
      border: 'border-pink-600',
      activeBg: 'bg-pink-100 border-pink-500 text-pink-700',
      isStamp: true
    },
    {
      id: 'eraser' as ToolType,
      nameVi: 'Cục Tẩy',
      nameEn: 'Eraser',
      descVi: 'Tẩy xóa nét',
      icon: Eraser,
      color: 'bg-slate-400',
      border: 'border-slate-500',
      activeBg: 'bg-slate-100 border-slate-500 text-slate-700'
    }
  ];

  return (
    <aside className="no-print bg-white/95 backdrop-blur-md border-r-2 sm:border-r-2 border-amber-200 p-2 sm:p-3 flex sm:flex-col items-center justify-between sm:justify-start gap-1 sm:gap-2.5 z-20 shrink-0 overflow-x-auto sm:overflow-y-auto w-full sm:w-20 md:w-24 shadow-sm">
      {/* Tool Buttons */}
      <div className="flex sm:flex-col items-center gap-1.5 sm:gap-2 w-full justify-around sm:justify-start">
        {tools.map(t => {
          const isActive = currentTool === t.id;
          const Icon = t.icon;

          return (
            <button
              key={t.id}
              onClick={() => {
                sound.playPop();
                onSelectTool(t.id);
                if (t.isStamp) {
                  onOpenStamps();
                }
              }}
              className={`btn-kid-3d w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center p-1 relative transition-all ${
                isActive
                  ? `${t.activeBg} ring-2 ring-amber-400 ring-offset-2 scale-105 shadow-md`
                  : 'bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200 text-amber-900'
              }`}
              title={lang === 'vi' ? t.nameVi : t.nameEn}
            >
              {t.isStamp && (
                <span className="text-xl sm:text-2xl leading-none">{selectedStamp}</span>
              )}
              {!t.isStamp && (
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? '' : 'text-amber-800'}`} />
              )}
              <span className="text-[9px] sm:text-[10px] font-black tracking-tight mt-0.5 leading-none">
                {lang === 'vi' ? t.nameVi : t.nameEn}
              </span>
              {isActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow-sm" />
              )}
            </button>
          );
        })}
      </div>

      <div className="h-px w-full bg-amber-200 hidden sm:block my-1" />

      {/* History & Reset Actions */}
      <div className="flex sm:flex-col items-center gap-1.5 sm:gap-2">
        {/* Undo */}
        <button
          onClick={() => {
            if (canUndo) {
              sound.playClick();
              onUndo();
            }
          }}
          disabled={!canUndo}
          className={`btn-kid-3d w-10 h-10 sm:w-14 sm:h-12 rounded-xl flex flex-col items-center justify-center border ${
            canUndo
              ? 'bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-900'
              : 'bg-gray-100 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed'
          }`}
          title={lang === 'vi' ? 'Hoàn tác nét vẽ (Undo)' : 'Undo'}
        >
          <Undo2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[8px] sm:text-[9px] font-bold hidden sm:inline">
            {lang === 'vi' ? 'Lùi lại' : 'Undo'}
          </span>
        </button>

        {/* Redo */}
        <button
          onClick={() => {
            if (canRedo) {
              sound.playClick();
              onRedo();
            }
          }}
          disabled={!canRedo}
          className={`btn-kid-3d w-10 h-10 sm:w-14 sm:h-12 rounded-xl flex flex-col items-center justify-center border ${
            canRedo
              ? 'bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-900'
              : 'bg-gray-100 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed'
          }`}
          title={lang === 'vi' ? 'Làm lại (Redo)' : 'Redo'}
        >
          <Redo2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[8px] sm:text-[9px] font-bold hidden sm:inline">
            {lang === 'vi' ? 'Tiến lên' : 'Redo'}
          </span>
        </button>

        {/* Reset / Clear */}
        <button
          onClick={() => {
            sound.playClick();
            onClear();
          }}
          className="btn-kid-3d w-10 h-10 sm:w-14 sm:h-12 rounded-xl flex flex-col items-center justify-center bg-red-100 hover:bg-red-200 border border-red-300 text-red-700"
          title={lang === 'vi' ? 'Vẽ lại từ đầu' : 'Clear All'}
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[8px] sm:text-[9px] font-bold hidden sm:inline">
            {lang === 'vi' ? 'Vẽ lại' : 'Clear'}
          </span>
        </button>
      </div>
    </aside>
  );
};

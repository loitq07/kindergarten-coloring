import React from 'react';
import { 
  Palette, 
  Image as ImageIcon, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Printer, 
  BookOpen, 
  Download,
  FolderHeart
} from 'lucide-react';
import { sound } from '../utils/sound';
import { ColoringTemplate } from '../types';

interface HeaderProps {
  currentTemplate: ColoringTemplate;
  onOpenTemplates: () => void;
  onOpenGallery: () => void;
  onOpenCelebrate: () => void;
  onOpenGuide: () => void;
  onPrint: () => void;
  onDownload: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  lang: 'vi' | 'en';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTemplate,
  onOpenTemplates,
  onOpenGallery,
  onOpenCelebrate,
  onOpenGuide,
  onPrint,
  onDownload,
  isMuted,
  onToggleMute,
  lang,
  onToggleLang
}) => {
  return (
    <header className="no-print w-full bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm px-3 sm:px-5 py-2 flex items-center justify-between z-30 shrink-0">
      {/* Brand & Active Template */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onOpenTemplates}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-pink-400 via-purple-400 to-amber-300 flex items-center justify-center text-white shadow-md transform hover:rotate-6 transition-transform">
            <Palette className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="hidden md:block">
            <h1 className="font-['Fredoka',sans-serif] text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 bg-clip-text text-transparent leading-tight">
              Bé Tập Tô Màu
            </h1>
            <p className="text-xs text-amber-700 font-medium">
              Sắc Màu Tuổi Thơ • iPad Studio
            </p>
          </div>
        </div>

        {/* Change Template Button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenTemplates();
          }}
          className="btn-kid-3d bg-amber-100 hover:bg-amber-200 text-amber-900 border-2 border-amber-300 font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl flex items-center gap-2 text-xs sm:text-sm active:scale-95 transition-all"
          title={lang === 'vi' ? 'Đổi mẫu tranh khác' : 'Change Template'}
        >
          <ImageIcon className="w-4 h-4 text-amber-600" />
          <span className="max-w-[110px] sm:max-w-[180px] truncate">
            {lang === 'vi' ? currentTemplate.titleVi : currentTemplate.titleEn}
          </span>
          <span className="text-[10px] bg-amber-400 text-amber-950 px-1.5 py-0.5 rounded-full uppercase font-black tracking-wide">
            {lang === 'vi' ? 'Đổi Tranh' : 'Switch'}
          </span>
        </button>
      </div>

      {/* Action Buttons Right */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Saved Gallery */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenGallery();
          }}
          className="btn-kid-3d bg-rose-100 hover:bg-rose-200 text-rose-800 border-2 border-rose-300 font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm"
          title={lang === 'vi' ? 'Phòng tranh của bé' : 'My Gallery'}
        >
          <FolderHeart className="w-4 h-4 text-rose-500" />
          <span className="hidden lg:inline">{lang === 'vi' ? 'Tranh Của Bé' : 'Gallery'}</span>
        </button>

        {/* Print coloring page */}
        <button
          onClick={() => {
            sound.playClick();
            onPrint();
          }}
          className="btn-kid-3d bg-sky-100 hover:bg-sky-200 text-sky-800 border-2 border-sky-300 font-bold p-2 sm:px-3 sm:py-2 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm"
          title={lang === 'vi' ? 'In tranh nét trắng đen ra giấy' : 'Print coloring sheet'}
        >
          <Printer className="w-4 h-4 text-sky-600" />
          <span className="hidden lg:inline">{lang === 'vi' ? 'In Ra Giấy' : 'Print'}</span>
        </button>

        {/* Download picture */}
        <button
          onClick={() => {
            sound.playClick();
            onDownload();
          }}
          className="btn-kid-3d bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border-2 border-emerald-300 font-bold p-2 sm:px-3 sm:py-2 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm"
          title={lang === 'vi' ? 'Tải ảnh về máy iPad' : 'Save to Photos'}
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span className="hidden lg:inline">{lang === 'vi' ? 'Tải Ảnh' : 'Save'}</span>
        </button>

        {/* Finish & Celebrate Button */}
        <button
          onClick={() => {
            sound.playVictory();
            onOpenCelebrate();
          }}
          className="btn-kid-3d btn-kid-3d-pink font-['Fredoka',sans-serif] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl flex items-center gap-1.5 text-xs sm:text-sm animate-pulse-subtle shadow-md"
        >
          <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
          <span>{lang === 'vi' ? 'Hoàn Thành!' : 'Done!'}</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={onToggleMute}
          className="p-2 sm:p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 active:scale-95 transition-transform"
          title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
        </button>

        {/* Parent Guide */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenGuide();
          }}
          className="p-2 sm:p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 active:scale-95 transition-transform"
          title={lang === 'vi' ? 'Hướng dẫn phụ huynh' : 'Guide'}
        >
          <BookOpen className="w-4 h-4 text-amber-600" />
        </button>

        {/* Language switch */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleLang();
          }}
          className="px-2 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 border border-purple-300 text-purple-800 text-xs font-black"
        >
          {lang === 'vi' ? 'VI' : 'EN'}
        </button>
      </div>
    </header>
  );
};

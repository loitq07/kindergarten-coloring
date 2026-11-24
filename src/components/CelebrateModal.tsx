import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';
import { ColoringTemplate } from '../types';
import { 
  Sparkles, 
  Download, 
  Printer, 
  RotateCcw, 
  Check, 
  Heart,
  Share2
} from 'lucide-react';

interface CelebrateModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: ColoringTemplate;
  onDownload: () => void;
  onPrint: () => void;
  onOpenTemplates: () => void;
  lang: 'vi' | 'en';
}

export const CelebrateModal: React.FC<CelebrateModalProps> = ({
  isOpen,
  onClose,
  template,
  onDownload,
  onPrint,
  onOpenTemplates,
  lang
}) => {
  useEffect(() => {
    if (isOpen) {
      sound.playVictory();

      // Confetti fireworks
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#FF477E', '#FFBE0B', '#70E000', '#3A86FF', '#8338EC'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-pop-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 border-4 border-amber-300 shadow-2xl text-center relative overflow-hidden">
        {/* Animated decorative stars */}
        <div className="text-6xl mb-2 animate-bounce-gentle">
          🏆
        </div>

        <h2 className="font-['Fredoka',sans-serif] text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-amber-500 to-purple-500 bg-clip-text text-transparent mb-1">
          {lang === 'vi' ? 'Hoan Hô Bé Yêu!' : 'Super Artist!'}
        </h2>

        <p className="text-amber-900 font-bold text-sm sm:text-base mb-1">
          {lang === 'vi' 
            ? `Bé vừa hoàn thành xuất sắc bức tranh "${template.titleVi}"!`
            : `You finished the wonderful picture "${template.titleEn}"!`}
        </p>

        <p className="text-xs text-amber-700 mb-6">
          {lang === 'vi' 
            ? 'Màu sắc thật hài hòa và rực rỡ! Bé có muốn lưu lại làm kỷ niệm không?'
            : 'Your colors are gorgeous! Would you like to save or print it?'}
        </p>

        {/* Big Action Buttons */}
        <div className="space-y-2.5 mb-6">
          {/* Download to iPad Photos */}
          <button
            onClick={() => {
              sound.playClick();
              onDownload();
            }}
            className="btn-kid-3d btn-kid-3d-green w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm sm:text-base shadow-md"
          >
            <Download className="w-5 h-5" />
            <span>{lang === 'vi' ? 'Tải Ảnh Về iPad' : 'Save to iPad Photos'}</span>
          </button>

          {/* Print coloring sheet */}
          <button
            onClick={() => {
              sound.playClick();
              onPrint();
            }}
            className="btn-kid-3d btn-kid-3d-blue w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm sm:text-base shadow-md"
          >
            <Printer className="w-5 h-5" />
            <span>{lang === 'vi' ? 'In Ra Giấy Khổ A4' : 'Print Coloring Sheet'}</span>
          </button>

          {/* Pick next picture */}
          <button
            onClick={() => {
              sound.playClick();
              onClose();
              onOpenTemplates();
            }}
            className="btn-kid-3d btn-kid-3d-amber w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm sm:text-base shadow-md"
          >
            <Sparkles className="w-5 h-5" />
            <span>{lang === 'vi' ? 'Tô Thêm Tranh Khác Nữa' : 'Color Another Picture!'}</span>
          </button>
        </div>

        {/* Back to current drawing */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="text-xs text-gray-500 hover:text-gray-700 font-bold underline"
        >
          {lang === 'vi' ? 'Tiếp tục ngắm tranh' : 'Keep viewing this drawing'}
        </button>
      </div>
    </div>
  );
};

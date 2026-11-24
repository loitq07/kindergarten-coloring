import React from 'react';
import { STAMPS } from '../data/categories';
import { sound } from '../utils/sound';
import { X, Sparkles } from 'lucide-react';

interface StampsSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStamp: string;
  onSelectStamp: (emoji: string) => void;
  lang: 'vi' | 'en';
}

export const StampsSelector: React.FC<StampsSelectorProps> = ({
  isOpen,
  onClose,
  selectedStamp,
  onSelectStamp,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-pop-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 border-4 border-amber-300 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b pb-3 border-amber-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-['Baloo_2',sans-serif] text-lg font-bold text-amber-950">
              {lang === 'vi' ? 'Chọn Con Dấu Ngộ Nghĩnh' : 'Choose Fun Stamps'}
            </h3>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-amber-800 mb-4 font-medium">
          {lang === 'vi' 
            ? 'Bé hãy chọn 1 hình thật cưng rồi chạm vào tranh để đóng dấu nhé!'
            : 'Pick a cute sticker stamp, then tap anywhere on your painting to stamp it!'}
        </p>

        {/* Stamps Grid */}
        <div className="grid grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto p-1">
          {STAMPS.map(stamp => {
            const isSelected = selectedStamp === stamp.emoji;
            return (
              <button
                key={stamp.id}
                onClick={() => {
                  sound.playStamp();
                  onSelectStamp(stamp.emoji);
                  onClose();
                }}
                className={`btn-kid-3d p-3 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
                  isSelected
                    ? 'bg-pink-100 border-2 border-pink-500 scale-105 shadow-md'
                    : 'bg-amber-50 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                <span className="text-3xl sm:text-4xl transform hover:scale-125 transition-transform">
                  {stamp.emoji}
                </span>
                <span className="text-[10px] font-bold text-amber-900 truncate w-full text-center">
                  {lang === 'vi' ? stamp.nameVi : stamp.nameEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

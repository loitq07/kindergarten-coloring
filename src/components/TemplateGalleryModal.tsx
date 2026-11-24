import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { ALL_TEMPLATES } from '../data/templates';
import { ColoringTemplate } from '../types';
import { sound } from '../utils/sound';
import { X, Search, Sparkles, Pencil, Upload } from 'lucide-react';

interface TemplateGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ColoringTemplate) => void;
  currentTemplateId: string;
  lang: 'vi' | 'en';
}

export const TemplateGalleryModal: React.FC<TemplateGalleryModalProps> = ({
  isOpen,
  onClose,
  onSelectTemplate,
  currentTemplateId,
  lang
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const customTemplate: ColoringTemplate = {
        id: `custom-${Date.now()}`,
        titleVi: file.name.replace(/\.[^/.]+$/, ''),
        titleEn: file.name.replace(/\.[^/.]+$/, ''),
        category: 'custom',
        difficulty: 'medium',
        viewBox: '0 0 500 500',
        regions: [],
        imageUrl: dataUrl,
        tags: ['custom', 'upload']
      };
      sound.playVictory();
      onSelectTemplate(customTemplate);
      onClose();
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  // Filter templates
  const filteredTemplates = ALL_TEMPLATES.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = 
      t.titleVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 animate-pop-in">
      <div className="bg-amber-50 rounded-3xl max-w-4xl w-full h-[90vh] flex flex-col border-4 border-amber-300 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-white px-4 sm:px-6 py-3.5 border-b-2 border-amber-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-['Baloo_2',sans-serif] text-xl font-bold text-amber-950">
                {lang === 'vi' ? 'Bộ Sưu Tập Tranh Tô Màu' : 'Coloring Picture Library'}
              </h2>
              <p className="text-xs text-amber-700">
                {lang === 'vi' 
                  ? `Hơn ${ALL_TEMPLATES.length} mẫu hình vẽ siêu đáng yêu cho bé lựa chọn`
                  : `Over ${ALL_TEMPLATES.length} cute pictures for children to color`}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center transition-transform active:scale-90"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="bg-white/80 px-4 sm:px-6 py-2.5 border-b border-amber-200 shrink-0 space-y-2">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-amber-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={lang === 'vi' ? 'Tìm mẫu tranh (sư tử, ô tô, khủng long, kem...)' : 'Search templates...'}
              className="w-full bg-amber-50/70 border border-amber-200 rounded-2xl pl-9 pr-4 py-2 text-sm text-amber-950 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => {
                sound.playClick();
                setSelectedCategory('all');
              }}
              className={`px-3 py-1.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
                  : 'bg-amber-100/70 hover:bg-amber-200 text-amber-800'
              }`}
            >
              🌈 {lang === 'vi' ? 'Tất Cả Mẫu' : 'All Pictures'}
            </button>

            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-amber-950 shadow-sm scale-105'
                    : 'bg-amber-100/70 hover:bg-amber-200 text-amber-800'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{lang === 'vi' ? cat.nameVi : cat.nameEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Upload Custom Coloring Page Card */}
          <label className="btn-kid-3d bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 rounded-3xl p-3 border-2 border-dashed border-purple-400 hover:border-purple-600 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102 shadow-sm text-center">
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-inner">
              <Upload className="w-6 h-6 animate-bounce-gentle" />
            </div>
            <div className="font-extrabold text-xs sm:text-sm text-purple-950 font-['Baloo_2',sans-serif]">
              {lang === 'vi' ? 'Tải Tranh Mẫu Lên' : 'Upload Picture'}
            </div>
            <div className="text-[10px] text-purple-700 font-bold leading-tight">
              {lang === 'vi' ? 'Chọn ảnh Elsa, Doraemon...' : 'Upload any coloring page'}
            </div>
            <span className="text-[10px] bg-purple-200 text-purple-900 font-black px-2 py-0.5 rounded-full uppercase">
              {lang === 'vi' ? 'Tải Lên' : 'Upload'}
            </span>
          </label>

          {filteredTemplates.map(tmpl => {
            const isCurrent = tmpl.id === currentTemplateId;
            const isFreeDraw = tmpl.id === 'free-draw';

            return (
              <div
                key={tmpl.id}
                onClick={() => {
                  sound.playVictory();
                  onSelectTemplate(tmpl);
                  onClose();
                }}
                className={`btn-kid-3d bg-white rounded-3xl p-3 border-2 flex flex-col items-center justify-between gap-2 cursor-pointer transition-all hover:scale-102 ${
                  isCurrent 
                    ? 'border-pink-500 ring-4 ring-pink-300 shadow-md' 
                    : 'border-amber-200 hover:border-amber-400'
                }`}
              >
                {/* SVG Outline Mini Preview */}
                <div className="w-full aspect-square bg-amber-50/50 rounded-2xl p-2 flex items-center justify-center overflow-hidden border border-amber-100 relative">
                  {isFreeDraw ? (
                    <div className="flex flex-col items-center justify-center text-amber-600 gap-1">
                      <Pencil className="w-10 h-10 animate-bounce-gentle" />
                      <span className="text-xs font-bold text-center">Trang Trắng Sáng Tạo</span>
                    </div>
                  ) : tmpl.imageUrl ? (
                    <img 
                      src={tmpl.imageUrl} 
                      alt={tmpl.titleVi} 
                      className="w-full h-full object-contain p-1 select-none pointer-events-none" 
                    />
                  ) : (
                    <svg viewBox={tmpl.viewBox || "0 0 500 500"} className="w-full h-full">
                      {tmpl.regions.map(r => (
                        <path
                          key={r.id}
                          d={r.d}
                          fill="#FFFFFF"
                          stroke="#333333"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ))}
                    </svg>
                  )}

                  {isCurrent && (
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                      {lang === 'vi' ? 'Đang Tô' : 'Active'}
                    </span>
                  )}
                </div>

                {/* Title & Button */}
                <div className="w-full text-center">
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm truncate">
                    {lang === 'vi' ? tmpl.titleVi : tmpl.titleEn}
                  </h4>
                  <button className="mt-1 w-full py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-black transition-colors">
                    {lang === 'vi' ? 'Tô Bức Này 🎨' : 'Color This 🎨'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

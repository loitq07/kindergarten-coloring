import React from 'react';
import { SavedArtwork } from '../types';
import { sound } from '../utils/sound';
import { X, Play, Trash2, Download, Image as ImageIcon } from 'lucide-react';

interface MyArtGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworks: SavedArtwork[];
  onLoadArtwork: (artwork: SavedArtwork) => void;
  onDeleteArtwork: (id: string) => void;
  lang: 'vi' | 'en';
}

export const MyArtGalleryModal: React.FC<MyArtGalleryModalProps> = ({
  isOpen,
  onClose,
  artworks,
  onLoadArtwork,
  onDeleteArtwork,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 animate-pop-in">
      <div className="bg-amber-50 rounded-3xl max-w-3xl w-full h-[85vh] flex flex-col border-4 border-amber-300 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-white px-5 py-4 border-b-2 border-amber-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-rose-400 text-white flex items-center justify-center shadow-sm">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-['Fredoka',sans-serif] text-xl font-bold text-amber-950">
                {lang === 'vi' ? 'Bộ Sưu Tập Tranh Của Bé' : "My Masterpieces Gallery"}
              </h2>
              <p className="text-xs text-amber-700">
                {lang === 'vi' 
                  ? `Đã lưu ${artworks.length} bức tranh bé đã tô`
                  : `${artworks.length} saved coloring artworks`}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {artworks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-amber-800">
              <span className="text-6xl mb-3">🎨</span>
              <h3 className="font-bold text-lg text-amber-950 mb-1">
                {lang === 'vi' ? 'Bé chưa lưu bức tranh nào!' : 'No saved artworks yet!'}
              </h3>
              <p className="text-xs max-w-xs text-amber-700">
                {lang === 'vi' 
                  ? 'Khi tô xong tranh, bé hãy bấm nút "Hoàn Thành!" hoặc "Tải Ảnh" để lưu lại vào đây nhé!'
                  : 'When you finish coloring, tap "Done!" or "Save" to keep your art here!'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {artworks.map(art => (
                <div
                  key={art.id}
                  className="bg-white rounded-3xl p-3 border-2 border-amber-200 shadow-md flex flex-col justify-between"
                >
                  {/* Thumbnail Image */}
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border border-amber-100 bg-amber-50 mb-2 relative">
                    <img 
                      src={art.thumbnailDataUrl} 
                      alt={art.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Info */}
                  <div className="mb-2">
                    <h4 className="font-bold text-amber-950 text-xs sm:text-sm truncate">{art.title}</h4>
                    <p className="text-[10px] text-amber-600">
                      {new Date(art.date).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US')}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        sound.playVictory();
                        onLoadArtwork(art);
                        onClose();
                      }}
                      className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 py-1.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{lang === 'vi' ? 'Mở Tô' : 'Open'}</span>
                    </button>

                    <a
                      href={art.thumbnailDataUrl}
                      download={`Tranh-cua-be-${art.title}.png`}
                      onClick={() => sound.playClick()}
                      className="p-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800"
                      title={lang === 'vi' ? 'Tải ảnh PNG' : 'Download PNG'}
                    >
                      <Download className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        sound.playClick();
                        onDeleteArtwork(art.id);
                      }}
                      className="p-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-700"
                      title={lang === 'vi' ? 'Xóa bức tranh này' : 'Delete'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

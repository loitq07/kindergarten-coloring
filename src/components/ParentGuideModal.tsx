import React from 'react';
import { sound } from '../utils/sound';
import { X, Tablet, Printer, Sparkles, CheckCircle2 } from 'lucide-react';

interface ParentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export const ParentGuideModal: React.FC<ParentGuideModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 animate-pop-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col border-4 border-amber-300 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-amber-100 px-5 py-4 border-b-2 border-amber-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-bold">
              📖
            </div>
            <div>
              <h2 className="font-['Fredoka',sans-serif] text-xl font-bold text-amber-950">
                {lang === 'vi' ? 'Hướng Dẫn Cho Phụ Huynh & Bé' : 'Parents & iPad Guide'}
              </h2>
              <p className="text-xs text-amber-800">
                {lang === 'vi' ? 'Mẹo sử dụng tối ưu trên iPad & Máy tính bảng' : 'Tips for iPad & Tablets'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-10 h-10 rounded-2xl bg-amber-200 hover:bg-amber-300 text-amber-900 flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-amber-950 text-sm">
          {/* Tip 1: Fullscreen on iPad */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex gap-3">
            <Tablet className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-900 mb-1">
                {lang === 'vi' ? '1. Đưa ứng dụng ra màn hình chính iPad (Toàn màn hình)' : '1. Add to Home Screen (Full Screen)'}
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed">
                {lang === 'vi'
                  ? 'Trên Safari của iPad, phụ huynh bấm vào nút "Chia sẻ" (biểu tượng mũi tên hướng lên) ➜ Chọn "Thêm vào MH chính" (Add to Home Screen). Ứng dụng sẽ chạy toàn màn hình như một ứng dụng iPad thực thụ, không bị thanh địa chỉ làm phân tâm bé!'
                  : 'In Safari on iPad, tap the Share icon ➜ "Add to Home Screen". The app will open full-screen like a native iPad app without URL bars!'}
              </p>
            </div>
          </div>

          {/* Tip 2: Apple Pencil & Touch */}
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 flex gap-3">
            <Sparkles className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-900 mb-1">
                {lang === 'vi' ? '2. Hỗ trợ Apple Pencil & Bút Cảm Ứng' : '2. Apple Pencil & Stylus Support'}
              </h4>
              <p className="text-xs text-sky-800 leading-relaxed">
                {lang === 'vi'
                  ? 'Ứng dụng hỗ trợ cảm ứng lực của Apple Pencil (nhấn nhẹ nét mảnh, nhấn mạnh nét to), chống chạm lòng bàn tay (Palm rejection), và cho phép dùng 2 ngón tay để phóng to/thu nhỏ tranh.'
                  : 'Supports Apple Pencil pressure sensitivity, palm rejection, and 2-finger pinch-to-zoom.'}
              </p>
            </div>
          </div>

          {/* Tip 3: Printing to paper */}
          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex gap-3">
            <Printer className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900 mb-1">
                {lang === 'vi' ? '3. In tranh nét đen trắng ra giấy A4' : '3. Print Black & White Coloring Sheets'}
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {lang === 'vi'
                  ? 'Bấm nút "In Ra Giấy" để tự động xuất hình nét viền đen trắng ra máy in. Bé có thể tô màu bằng bút sáp, bút chì màu hoặc màu nước ngoài đời thực!'
                  : 'Tap "Print" to automatically print out crisp black-and-white coloring sheets for real crayon/pencil coloring!'}
              </p>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">
              {lang === 'vi' ? 'Bộ công cụ vẽ phong phú cho bé:' : 'Rich tools for kids:'}
            </h4>
            <ul className="text-xs text-purple-800 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Đổ Màu (Fill):</strong> Chạm mảng màu tô tức thì, không lem, phù hợp cho bé 3-5 tuổi.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Bút Sáp & Cọ Vẽ:</strong> Nét vẽ chân thực, thỏa sức sáng tạo.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Bút Kim Tuyến & Dạ Quang:</strong> Lấp lánh sao và phát sáng neon diệu kỳ.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong>Con Dấu Sticker:</strong> Dán ngôi sao, vương miện, trái tim vui nhộn.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-amber-50 px-5 py-3 border-t border-amber-200 flex justify-end">
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="btn-kid-3d btn-kid-3d-amber px-6 py-2 rounded-2xl font-bold text-xs"
          >
            {lang === 'vi' ? 'Đã Hiểu, Cho Bé Tô Màu!' : 'Got It, Let’s Color!'}
          </button>
        </div>
      </div>
    </div>
  );
};

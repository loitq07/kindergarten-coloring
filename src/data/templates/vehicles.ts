import { ColoringTemplate } from '../../types';

export const VEHICLE_TEMPLATES: ColoringTemplate[] = [
  // 1. ĐOÀN TÀU THẦN TIÊN XÌNH XỊCH
  {
    id: 'vehicle-train',
    titleVi: 'Đoàn Tàu Thần Tiên Xình Xịch',
    titleEn: 'Happy Choo-Choo Train',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['tàu hỏa', 'train', 'xe lửa', 'giao thông'],
    regions: [
      { id: 'smoke-heart-1', labelVi: 'Khói tàu hình trái tim 1', d: 'M 140,80 C 130,50 100,60 110,85 C 100,105 130,120 140,100 C 150,120 180,105 170,85 C 180,60 150,50 140,80 Z' },
      { id: 'smoke-heart-2', labelVi: 'Khói tàu nhỏ 2', d: 'M 190,50 A 15,15 0 1,0 220,50 A 15,15 0 1,0 190,50 Z' },
      { id: 'smoke-heart-3', labelVi: 'Khói tàu nhỏ 3', d: 'M 240,30 A 20,20 0 1,0 280,30 A 20,20 0 1,0 240,30 Z' },

      // Chimney & Front Cowcatcher
      { id: 'train-chimney', labelVi: 'Ống khói tàu', d: 'M 125,120 L 155,120 L 150,190 L 130,190 Z' },
      { id: 'train-cowcatcher', labelVi: 'Mũi gạt tàu phía trước', d: 'M 40,370 L 90,370 L 90,410 L 40,410 Z' },

      // Boiler Front Face (Smiling face on front of train)
      { id: 'train-face-boiler', labelVi: 'Mặt cười đầu tàu tròn', d: 'M 85,200 C 85,150 160,150 160,200 L 160,370 L 85,370 Z' },
      { id: 'train-eye-l', labelVi: 'Mắt đầu tàu trái', d: 'M 100,220 A 7,7 0 1,0 114,220 A 7,7 0 1,0 100,220 Z' },
      { id: 'train-eye-r', labelVi: 'Mắt đầu tàu phải', d: 'M 130,220 A 7,7 0 1,0 144,220 A 7,7 0 1,0 130,220 Z' },
      { id: 'train-smile', labelVi: 'Miệng cười tươi', d: 'M 108,245 Q 122,260 136,245 Z' },

      // Boiler Body & Cab
      { id: 'train-boiler-body', labelVi: 'Thân nồi hơi xanh', d: 'M 160,190 L 270,190 L 270,370 L 160,370 Z' },
      { id: 'train-boiler-stripe', labelVi: 'Dải sọc trang trí vàng', d: 'M 200,190 L 225,190 L 225,370 L 200,370 Z' },
      { id: 'train-cab', labelVi: 'Cabin lái tàu đỏ', d: 'M 270,140 L 430,140 L 430,370 L 270,370 Z' },
      { id: 'train-roof', labelVi: 'Mái vòm cabin cong', d: 'M 260,140 C 350,120 440,140 440,140 L 430,155 L 270,155 Z' },

      // Cab Window & Teddy Bear Driver
      { id: 'train-window', labelVi: 'Cửa sổ cabin vuông', d: 'M 290,170 L 410,170 L 410,270 L 290,270 Z' },
      { id: 'bear-ear-l', labelVi: 'Tai gấu lái tàu trái', d: 'M 320,180 A 10,10 0 1,0 340,180 A 10,10 0 1,0 320,180 Z' },
      { id: 'bear-ear-r', labelVi: 'Tai gấu lái tàu phải', d: 'M 360,180 A 10,10 0 1,0 380,180 A 10,10 0 1,0 360,180 Z' },
      { id: 'bear-head', labelVi: 'Đầu chú gấu nâu', d: 'M 320,200 C 320,170 380,170 380,200 C 380,240 320,240 320,200 Z' },
      { id: 'bear-paw', labelVi: 'Bàn tay vẫy chào', d: 'M 380,230 C 400,220 405,250 385,255 Z' },

      // Wheels
      { id: 'wheel-front-1', labelVi: 'Bánh nhỏ trước 1', d: 'M 75,390 A 30,30 0 1,0 135,390 A 30,30 0 1,0 75,390 Z' },
      { id: 'wheel-rim-1', labelVi: 'Trục bánh 1', d: 'M 93,390 A 12,12 0 1,0 117,390 A 12,12 0 1,0 93,390 Z' },
      { id: 'wheel-front-2', labelVi: 'Bánh nhỏ trước 2', d: 'M 155,390 A 30,30 0 1,0 215,390 A 30,30 0 1,0 155,390 Z' },
      { id: 'wheel-rim-2', labelVi: 'Trục bánh 2', d: 'M 173,390 A 12,12 0 1,0 197,390 A 12,12 0 1,0 173,390 Z' },
      { id: 'wheel-big-back', labelVi: 'Bánh xe to khổng lồ sau', d: 'M 270,360 A 55,55 0 1,0 380,360 A 55,55 0 1,0 270,360 Z' },
      { id: 'wheel-big-rim', labelVi: 'Trục bánh xe to', d: 'M 305,360 A 20,20 0 1,0 345,360 A 20,20 0 1,0 305,360 Z' },

      // Railway Tracks
      { id: 'rail-top', labelVi: 'Thanh ray trên', d: 'M 10,440 L 490,440 L 490,450 L 10,450 Z' },
      { id: 'rail-bottom', labelVi: 'Thanh ray dưới', d: 'M 10,465 L 490,465 L 490,475 L 10,475 Z' }
    ]
  }
];

import { ColoringTemplate } from '../../types';

export const SPACE_TEMPLATES: ColoringTemplate[] = [
  // 1. PHI HÀNH GIA NHÍ VẪY TAY
  {
    id: 'space-astronaut',
    titleVi: 'Phi Hành Gia Nhí Vẫy Tay',
    titleEn: 'Little Astronaut Waving',
    category: 'space',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['phi hành gia', 'vũ trụ', 'astronaut', 'không gian'],
    regions: [
      { id: 'astro-helmet', labelVi: 'Mũ bảo hiểm vũ trụ tròn', d: 'M 160,160 C 160,80 340,80 340,160 C 340,240 160,240 160,160 Z' },
      { id: 'astro-visor', labelVi: 'Kính chắn phản quang', d: 'M 185,160 C 185,115 315,115 315,160 C 315,205 185,205 185,160 Z' },
      { id: 'astro-visor-shine', labelVi: 'Ánh lóa kính', d: 'M 200,135 Q 240,130 260,140 Q 230,145 205,145 Z' },
      { id: 'astro-body', labelVi: 'Bộ đồ du hành vũ trụ', d: 'M 190,240 L 310,240 L 325,370 L 175,370 Z' },
      { id: 'astro-chest-panel', labelVi: 'Bảng điều khiển ngực', d: 'M 220,270 L 280,270 L 280,320 L 220,320 Z' },
      { id: 'astro-arm-wave', labelVi: 'Tay vẫy chào bên phải', d: 'M 310,245 C 360,210 390,160 380,140 C 360,130 335,180 310,215 Z' },
      { id: 'astro-glove-r', labelVi: 'Găng tay phải', d: 'M 370,150 C 395,130 410,150 395,170 Z' },
      { id: 'astro-arm-l', labelVi: 'Tay buông bên trái', d: 'M 190,250 C 150,270 140,320 155,340 C 170,350 180,320 190,290 Z' },
      { id: 'astro-leg-l', labelVi: 'Ống chân trái', d: 'M 185,370 L 240,370 L 235,445 L 180,445 Z' },
      { id: 'astro-leg-r', labelVi: 'Ống chân phải', d: 'M 260,370 L 315,370 L 320,445 L 265,445 Z' },
      { id: 'astro-boot-l', labelVi: 'Giày du hành trái', d: 'M 165,445 C 165,430 240,430 240,465 L 165,465 Z' },
      { id: 'astro-boot-r', labelVi: 'Giày du hành phải', d: 'M 260,445 C 260,430 335,430 335,465 L 260,465 Z' },
      { id: 'star-1', labelVi: 'Ngôi sao 1', d: 'M 90,80 L 98,100 L 120,100 L 102,112 L 109,132 L 90,120 L 71,132 L 78,112 L 60,100 L 82,100 Z' },
      { id: 'planet-saturn', labelVi: 'Hành tinh có vành đai', d: 'M 400,380 A 30,30 0 1,0 460,380 A 30,30 0 1,0 400,380 Z' }
    ]
  },

  // 2. TÊN LỬA BAY VÀO VŨ TRỤ
  {
    id: 'space-rocket',
    titleVi: 'Tên Lửa Bay Vào Không Gian',
    titleEn: 'Rocket Blasting Off',
    category: 'space',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['tên lửa', 'rocket', 'vũ trụ'],
    regions: [
      { id: 'roc-nose', labelVi: 'Chóp tên lửa nhọn', d: 'M 210,130 C 230,60 270,60 290,130 Z' },
      { id: 'roc-body', labelVi: 'Thân tên lửa trắng', d: 'M 210,130 L 290,130 L 305,320 L 195,320 Z' },
      { id: 'roc-window', labelVi: 'Cửa sổ kính tròn', d: 'M 225,190 A 25,25 0 1,0 275,190 A 25,25 0 1,0 225,190 Z' },
      { id: 'roc-window-rim', labelVi: 'Vành cửa sổ', d: 'M 220,190 A 30,30 0 1,0 280,190 A 30,30 0 1,0 220,190 Z' },
      { id: 'roc-wing-l', labelVi: 'Cánh tên lửa trái', d: 'M 195,260 L 130,340 L 195,330 Z' },
      { id: 'roc-wing-r', labelVi: 'Cánh tên lửa phải', d: 'M 305,260 L 370,340 L 305,330 Z' },
      { id: 'roc-fin-mid', labelVi: 'Vây giữa', d: 'M 245,260 L 255,260 L 255,330 L 245,330 Z' },
      { id: 'roc-flame-out', labelVi: 'Lửa phụt ngoài cam đỏ', d: 'M 210,325 C 220,440 250,470 250,470 C 250,470 280,440 290,325 Z' },
      { id: 'roc-flame-in', labelVi: 'Lửa phụt lõi vàng', d: 'M 230,325 C 235,390 250,420 250,420 C 250,420 265,390 270,325 Z' }
    ]
  },

  // 3. ĐĨA BAY NGƯỜI NGOÀI HÀNH TINH
  {
    id: 'space-ufo',
    titleVi: 'Đĩa Bay Của Bạn Ngoài Hành Tinh',
    titleEn: 'Friendly Alien UFO',
    category: 'space',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['đĩa bay', 'ufo', 'alien', 'vũ trụ'],
    regions: [
      { id: 'ufo-dome', labelVi: 'Vòm kính trong suốt', d: 'M 180,220 C 180,130 320,130 320,220 Z' },
      { id: 'ufo-alien-head', labelVi: 'Đầu người ngoài hành tinh xanh', d: 'M 215,190 C 215,150 285,150 285,190 C 285,220 215,220 215,190 Z' },
      { id: 'ufo-alien-antenna', labelVi: 'Ăng-ten trên đầu', d: 'M 245,150 L 245,130 A 8,8 0 1,0 255,130 L 255,150 Z' },
      { id: 'ufo-alien-eye', labelVi: 'Mắt to tròn', d: 'M 235,180 A 15,15 0 1,0 265,180 A 15,15 0 1,0 235,180 Z' },
      { id: 'ufo-saucer-top', labelVi: 'Thân trên đĩa bay', d: 'M 100,240 C 130,200 370,200 400,240 L 415,265 C 380,285 120,285 85,265 Z' },
      { id: 'ufo-light-1', labelVi: 'Đèn chớp 1', d: 'M 130,250 A 10,6 0 1,0 150,250 A 10,6 0 1,0 130,250 Z' },
      { id: 'ufo-light-2', labelVi: 'Đèn chớp 2', d: 'M 190,255 A 10,6 0 1,0 210,255 A 10,6 0 1,0 190,255 Z' },
      { id: 'ufo-light-3', labelVi: 'Đèn chớp 3', d: 'M 250,257 A 10,6 0 1,0 270,257 A 10,6 0 1,0 250,257 Z' },
      { id: 'ufo-light-4', labelVi: 'Đèn chớp 4', d: 'M 310,255 A 10,6 0 1,0 330,255 A 10,6 0 1,0 310,255 Z' },
      { id: 'ufo-light-5', labelVi: 'Đèn chớp 5', d: 'M 370,250 A 10,6 0 1,0 390,250 A 10,6 0 1,0 370,250 Z' },
      { id: 'ufo-beam', labelVi: 'Tia sáng chiếu xuống', d: 'M 200,285 L 300,285 L 390,460 L 110,460 Z' }
    ]
  }
];

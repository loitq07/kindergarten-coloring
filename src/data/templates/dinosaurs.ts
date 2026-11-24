import { ColoringTemplate } from '../../types';

export const DINOSAUR_TEMPLATES: ColoringTemplate[] = [
  // 1. T-REX TÍ HON DỄ THƯƠNG
  {
    id: 'dino-trex',
    titleVi: 'Khủng Long T-Rex Tí Hon',
    titleEn: 'Cute Baby T-Rex',
    category: 'dinosaurs',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['khủng long', 't-rex', 'dinosaur'],
    regions: [
      { id: 'trex-head', labelVi: 'Đầu T-Rex to tròn', d: 'M 150,150 C 150,70 300,70 320,130 C 330,170 310,210 240,210 L 190,210 C 160,210 150,180 150,150 Z' },
      { id: 'trex-jaw', labelVi: 'Hàm dưới cười', d: 'M 180,215 L 240,215 C 240,240 200,250 180,225 Z' },
      { id: 'trex-teeth', labelVi: 'Răng nhỏ xíu', d: 'M 195,215 L 205,225 L 215,215 L 225,225 L 235,215 Z' },
      { id: 'trex-eye', labelVi: 'Mắt tròn xoe', d: 'M 195,125 A 16,16 0 1,0 227,125 A 16,16 0 1,0 195,125 Z' },
      { id: 'trex-body', labelVi: 'Thân khủng long', d: 'M 160,220 C 130,260 120,330 150,400 C 190,440 240,430 260,390 C 340,380 430,340 450,290 C 390,320 320,310 260,280 C 240,240 210,210 160,220 Z' },
      { id: 'trex-belly', labelVi: 'Bụng tròn vàng', d: 'M 160,270 C 145,310 145,360 170,400 C 210,420 230,380 230,320 C 230,280 200,260 160,270 Z' },
      { id: 'trex-arm', labelVi: 'Tay ngắn cũn cỡn', d: 'M 175,270 C 215,280 215,310 190,310 C 180,310 170,290 175,270 Z' },
      { id: 'trex-leg-left', labelVi: 'Chân to khỏe', d: 'M 150,380 C 140,420 140,460 180,460 C 200,460 210,430 200,390 Z' },
      { id: 'trex-leg-right', labelVi: 'Chân sau', d: 'M 220,370 C 220,410 225,450 260,450 C 275,450 280,420 270,380 Z' },
      { id: 'trex-spike-1', labelVi: 'Gai lưng 1', d: 'M 270,100 L 290,85 L 290,115 Z' },
      { id: 'trex-spike-2', labelVi: 'Gai lưng 2', d: 'M 245,230 L 265,220 L 260,250 Z' },
      { id: 'trex-spike-3', labelVi: 'Gai lưng 3', d: 'M 305,295 L 325,285 L 320,315 Z' }
    ]
  },

  // 2. KHỦNG LONG CỔ DÀI BRACHIO
  {
    id: 'dino-longneck',
    titleVi: 'Khủng Long Cổ Dài Hiền Lành',
    titleEn: 'Gentle Long-Neck Dino',
    category: 'dinosaurs',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['cổ dài', 'brachiosaurus', 'khủng long hiền'],
    regions: [
      { id: 'dino-head', labelVi: 'Đầu nhỏ xinh', d: 'M 340,90 C 370,80 390,110 370,135 C 340,140 330,120 340,90 Z' },
      { id: 'dino-eye', labelVi: 'Mắt hiền hòa', d: 'M 355,105 A 6,6 0 1,0 367,105 A 6,6 0 1,0 355,105 Z' },
      { id: 'dino-neck', labelVi: 'Cổ vươn cao', d: 'M 335,130 C 310,210 260,270 240,300 L 280,310 C 310,270 355,200 365,130 Z' },
      { id: 'dino-body', labelVi: 'Thân tròn múp', d: 'M 100,340 C 60,350 50,330 30,320 C 50,350 90,390 140,400 L 280,390 C 300,340 280,300 240,300 C 180,300 130,320 100,340 Z' },
      { id: 'dino-leg-fl', labelVi: 'Chân trước 1', d: 'M 230,380 L 230,460 L 260,460 L 265,380 Z' },
      { id: 'dino-leg-fr', labelVi: 'Chân trước 2', d: 'M 270,370 L 270,450 L 295,450 L 295,370 Z' },
      { id: 'dino-leg-bl', labelVi: 'Chân sau 1', d: 'M 120,380 L 120,460 L 150,460 L 155,380 Z' },
      { id: 'dino-leg-br', labelVi: 'Chân sau 2', d: 'M 160,370 L 160,450 L 185,450 L 185,370 Z' },
      { id: 'dino-spot-1', labelVi: 'Đốm lưng 1', d: 'M 160,330 A 15,15 0 1,0 190,330 A 15,15 0 1,0 160,330 Z' },
      { id: 'dino-spot-2', labelVi: 'Đốm lưng 2', d: 'M 210,340 A 12,12 0 1,0 234,340 A 12,12 0 1,0 210,340 Z' }
    ]
  },

  // 3. KHỦNG LONG BA SỪNG TRICERATOPS
  {
    id: 'dino-triceratops',
    titleVi: 'Khủng Long Ba Sừng Ngộ Nghĩnh',
    titleEn: 'Cute Triceratops',
    category: 'dinosaurs',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['ba sừng', 'triceratops', 'khủng long'],
    regions: [
      { id: 'tri-frill', labelVi: 'Diềm xòe quanh đầu', d: 'M 220,90 C 260,60 320,60 360,110 C 380,150 370,220 340,240 L 220,170 Z' },
      { id: 'tri-horn-top1', labelVi: 'Sừng trên 1', d: 'M 220,110 L 170,80 L 210,135 Z' },
      { id: 'tri-horn-top2', labelVi: 'Sừng trên 2', d: 'M 270,95 L 250,50 L 285,115 Z' },
      { id: 'tri-horn-nose', labelVi: 'Sừng mũi nhọn', d: 'M 120,210 L 80,195 L 125,230 Z' },
      { id: 'tri-head', labelVi: 'Khuôn mặt', d: 'M 120,200 C 130,160 200,140 240,170 C 260,220 220,260 170,260 C 130,260 120,230 120,200 Z' },
      { id: 'tri-eye', labelVi: 'Mắt lấp lánh', d: 'M 180,185 A 9,9 0 1,0 198,185 A 9,9 0 1,0 180,185 Z' },
      { id: 'tri-body', labelVi: 'Thân khủng long mập', d: 'M 230,240 C 260,210 350,210 390,270 C 440,310 460,340 480,335 C 460,360 410,380 370,380 L 260,380 C 230,340 220,280 230,240 Z' },
      { id: 'tri-leg-fl', labelVi: 'Chân trước trái', d: 'M 220,360 L 220,440 L 260,440 L 265,360 Z' },
      { id: 'tri-leg-bl', labelVi: 'Chân sau trái', d: 'M 340,360 L 340,440 L 380,440 L 385,360 Z' }
    ]
  }
];

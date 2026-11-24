import { ColoringTemplate } from '../../types';

export const FRUIT_TEMPLATES: ColoringTemplate[] = [
  // 1. LY KEM ỐC QUẾ 3 TẦNG
  {
    id: 'fruit-icecream',
    titleVi: 'Ly Kem Ốc Quế Mát Lạnh',
    titleEn: 'Triple Scoop Ice Cream Cone',
    category: 'fruits',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['kem', 'ice cream', 'đồ ngọt', 'ốc quế'],
    regions: [
      { id: 'ice-cherry', labelVi: 'Quả cherry đỏ trên cùng', d: 'M 230,85 A 20,20 0 1,0 270,85 A 20,20 0 1,0 230,85 Z' },
      { id: 'ice-cherry-stem', labelVi: 'Cuống cherry', d: 'M 250,65 C 265,40 290,45 295,50 L 290,52 C 285,48 265,45 250,67 Z' },
      { id: 'ice-scoop-top', labelVi: 'Viên kem tầng 1', d: 'M 200,160 C 200,100 300,100 300,160 C 310,165 310,180 295,185 C 280,185 270,175 250,180 C 230,175 220,185 205,185 C 190,180 190,165 200,160 Z' },
      { id: 'ice-scoop-mid', labelVi: 'Viên kem tầng 2', d: 'M 180,210 C 180,170 320,170 320,210 C 330,220 330,240 310,245 C 290,245 275,230 250,235 C 225,230 210,245 190,245 C 170,240 170,220 180,210 Z' },
      { id: 'ice-scoop-bot', labelVi: 'Viên kem tầng 3', d: 'M 160,260 C 160,225 340,225 340,260 C 350,275 350,295 330,305 C 310,305 290,290 250,295 C 210,290 190,305 170,305 C 150,295 150,275 160,260 Z' },
      { id: 'ice-cone', labelVi: 'Bánh quế giòn tan', d: 'M 175,295 L 325,295 L 250,470 Z' },
      { id: 'ice-sprinkle-1', labelVi: 'Hạt cốm ngọt 1', d: 'M 215,120 L 230,125 L 227,133 L 212,128 Z' },
      { id: 'ice-sprinkle-2', labelVi: 'Hạt cốm ngọt 2', d: 'M 270,130 L 285,125 L 287,133 L 272,138 Z' },
      { id: 'ice-sprinkle-3', labelVi: 'Hạt cốm ngọt 3', d: 'M 235,145 L 250,145 L 250,153 L 235,153 Z' }
    ]
  },

  // 2. DÂU TÂY MỌNG NƯỚC CƯỜI TƯƠI
  {
    id: 'fruit-strawberry',
    titleVi: 'Trái Dâu Tây Mọng Nước',
    titleEn: 'Smiling Strawberry',
    category: 'fruits',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['dâu tây', 'strawberry', 'hoa quả'],
    regions: [
      { id: 'straw-calyx', labelVi: 'Tai lá xanh', d: 'M 250,130 C 230,70 170,80 180,130 C 140,110 120,160 170,170 C 200,160 230,165 250,160 C 270,165 300,160 330,170 C 380,160 360,110 320,130 C 330,80 270,70 250,130 Z' },
      { id: 'straw-stem', labelVi: 'Cuống dâu lá', d: 'M 245,60 C 240,40 260,35 255,60 Z' },
      { id: 'straw-body', labelVi: 'Thân dâu đỏ tươi', d: 'M 150,180 C 120,240 160,380 250,440 C 340,380 380,240 350,180 C 310,160 190,160 150,180 Z' },
      { id: 'straw-eye-l', labelVi: 'Mắt tròn trái', d: 'M 205,245 A 9,9 0 1,0 223,245 A 9,9 0 1,0 205,245 Z' },
      { id: 'straw-eye-r', labelVi: 'Mắt tròn phải', d: 'M 277,245 A 9,9 0 1,0 295,245 A 9,9 0 1,0 277,245 Z' },
      { id: 'straw-cheek-l', labelVi: 'Má hồng trái', d: 'M 185,270 A 12,8 0 1,0 209,270 A 12,8 0 1,0 185,270 Z' },
      { id: 'straw-cheek-r', labelVi: 'Má hồng phải', d: 'M 291,270 A 12,8 0 1,0 315,270 A 12,8 0 1,0 291,270 Z' },
      { id: 'straw-seed-1', labelVi: 'Hạt dâu 1', d: 'M 210,320 A 4,6 0 1,0 218,320 A 4,6 0 1,0 210,320 Z' },
      { id: 'straw-seed-2', labelVi: 'Hạt dâu 2', d: 'M 250,335 A 4,6 0 1,0 258,335 A 4,6 0 1,0 250,335 Z' },
      { id: 'straw-seed-3', labelVi: 'Hạt dâu 3', d: 'M 290,320 A 4,6 0 1,0 298,320 A 4,6 0 1,0 290,320 Z' },
      { id: 'straw-seed-4', labelVi: 'Hạt dâu 4', d: 'M 230,375 A 4,6 0 1,0 238,375 A 4,6 0 1,0 230,375 Z' },
      { id: 'straw-seed-5', labelVi: 'Hạt dâu 5', d: 'M 270,375 A 4,6 0 1,0 278,375 A 4,6 0 1,0 270,375 Z' }
    ]
  },

  // 3. MIẾNG DƯA HẤU MÁT LẠNH
  {
    id: 'fruit-watermelon',
    titleVi: 'Miếng Dưa Hấu Mát Lạnh',
    titleEn: 'Fresh Watermelon Slice',
    category: 'fruits',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['dưa hấu', 'watermelon', 'trái cây'],
    regions: [
      { id: 'wm-rind-green', labelVi: 'Vỏ xanh sọc ngoài', d: 'M 60,200 C 100,420 400,420 440,200 L 415,215 C 380,390 120,390 85,215 Z' },
      { id: 'wm-rind-white', labelVi: 'Cùi trắng thơm giòn', d: 'M 85,215 C 120,390 380,390 415,215 L 400,225 C 365,370 135,370 100,225 Z' },
      { id: 'wm-flesh', labelVi: 'Ruột dưa đỏ mọng', d: 'M 100,225 C 135,370 365,370 400,225 L 100,225 Z' },
      { id: 'wm-seed-1', labelVi: 'Hạt dưa 1', d: 'M 170,265 A 6,10 0 1,0 182,265 A 6,10 0 1,0 170,265 Z' },
      { id: 'wm-seed-2', labelVi: 'Hạt dưa 2', d: 'M 245,280 A 6,10 0 1,0 257,280 A 6,10 0 1,0 245,280 Z' },
      { id: 'wm-seed-3', labelVi: 'Hạt dưa 3', d: 'M 320,265 A 6,10 0 1,0 332,265 A 6,10 0 1,0 320,265 Z' },
      { id: 'wm-seed-4', labelVi: 'Hạt dưa 4', d: 'M 210,320 A 6,10 0 1,0 222,320 A 6,10 0 1,0 210,320 Z' },
      { id: 'wm-seed-5', labelVi: 'Hạt dưa 5', d: 'M 280,320 A 6,10 0 1,0 292,320 A 6,10 0 1,0 280,320 Z' }
    ]
  },

  // 4. BÁNH CUPCAKE NGỌT NGÀO
  {
    id: 'fruit-cupcake',
    titleVi: 'Bánh Cupcake Ngọt Ngào',
    titleEn: 'Delicious Sweet Cupcake',
    category: 'fruits',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['bánh cupcake', 'bánh ngọt', 'cupcake'],
    regions: [
      { id: 'cup-cherry', labelVi: 'Quả dâu / cherry trên đỉnh', d: 'M 230,90 A 20,20 0 1,0 270,90 A 20,20 0 1,0 230,90 Z' },
      { id: 'cup-frosting-top', labelVi: 'Lớp kem xoắn tầng 1', d: 'M 200,160 C 200,110 300,110 300,160 C 315,175 305,200 285,200 C 270,190 250,195 235,190 C 215,200 190,185 200,160 Z' },
      { id: 'cup-frosting-mid', labelVi: 'Lớp kem xoắn tầng 2', d: 'M 160,220 C 160,180 340,180 340,220 C 360,240 340,270 310,270 C 290,260 270,265 250,260 C 230,265 210,260 190,270 C 160,270 140,240 160,220 Z' },
      { id: 'cup-base', labelVi: 'Khuôn bánh giấy nướng', d: 'M 170,275 L 330,275 L 305,440 L 195,440 Z' },
      { id: 'cup-stripe-1', labelVi: 'Nếp gấp giấy 1', d: 'M 205,275 L 220,440 L 235,440 L 220,275 Z' },
      { id: 'cup-stripe-2', labelVi: 'Nếp gấp giấy 2', d: 'M 280,275 L 265,440 L 280,440 L 295,275 Z' }
    ]
  }
];

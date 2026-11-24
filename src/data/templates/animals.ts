import { ColoringTemplate } from '../../types';

export const ANIMAL_TEMPLATES: ColoringTemplate[] = [
  // 1. SƯ TỬ CON VUI VẺ
  {
    id: 'animal-lion',
    titleVi: 'Sư Tử Con Vui Vẻ',
    titleEn: 'Happy Baby Lion',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['sư tử', 'lion', 'động vật hoang dã', 'cute'],
    regions: [
      { id: 'bg-ground', labelVi: 'Mặt đất cỏ', d: 'M 0,420 Q 250,380 500,420 L 500,500 L 0,500 Z' },
      { id: 'sun', labelVi: 'Ông mặt trời', d: 'M 70,80 A 40,40 0 1,0 150,80 A 40,40 0 1,0 70,80 Z' },
      { id: 'cloud-1', labelVi: 'Đám mây nhỏ', d: 'M 350,70 Q 370,50 400,60 Q 430,50 440,70 Q 460,80 450,100 Q 430,110 390,105 Q 360,110 350,90 Q 340,80 350,70 Z' },
      { id: 'lion-mane', labelVi: 'Bờm sư tử', d: 'M 250,60 C 290,50 330,80 350,110 C 380,120 400,160 390,200 C 410,230 390,280 370,300 C 370,340 330,370 290,370 C 260,390 220,380 190,360 C 150,370 120,330 120,290 C 90,270 90,220 110,180 C 100,140 130,100 160,90 C 180,60 220,50 250,60 Z' },
      { id: 'lion-ear-left-out', labelVi: 'Tai ngoài trái', d: 'M 170,120 C 140,110 130,150 160,170 Z' },
      { id: 'lion-ear-left-in', labelVi: 'Tai trong trái', d: 'M 165,130 C 145,125 140,150 160,160 Z' },
      { id: 'lion-ear-right-out', labelVi: 'Tai ngoài phải', d: 'M 330,120 C 360,110 370,150 340,170 Z' },
      { id: 'lion-ear-right-in', labelVi: 'Tai trong phải', d: 'M 335,130 C 355,125 360,150 340,160 Z' },
      { id: 'lion-body', labelVi: 'Thân sư tử', d: 'M 190,320 C 180,380 180,420 200,450 L 300,450 C 320,420 320,380 310,320 Z' },
      { id: 'lion-belly', labelVi: 'Bụng sư tử', d: 'M 215,350 C 210,390 210,420 225,440 L 275,440 C 290,420 290,390 285,350 Z' },
      { id: 'lion-tail', labelVi: 'Đuôi sư tử', d: 'M 310,390 C 380,390 400,340 420,350 C 430,355 420,380 390,405 C 360,425 320,415 310,405 Z' },
      { id: 'lion-tail-puff', labelVi: 'Chỏm lông đuôi', d: 'M 410,340 C 435,320 460,340 450,365 C 440,385 415,375 410,340 Z' },
      { id: 'lion-head', labelVi: 'Khuôn mặt sư tử', d: 'M 250,110 C 310,110 340,150 340,220 C 340,290 300,320 250,320 C 200,320 160,290 160,220 C 160,150 190,110 250,110 Z' },
      { id: 'lion-muzzle', labelVi: 'Mõm sư tử', d: 'M 250,210 C 280,210 295,235 285,265 C 275,285 225,285 215,265 C 205,235 220,210 250,210 Z' },
      { id: 'lion-nose', labelVi: 'Mũi sư tử', d: 'M 240,225 Q 250,220 260,225 Q 250,245 240,225 Z' },
      { id: 'lion-eye-left', labelVi: 'Mắt trái', d: 'M 205,185 A 12,14 0 1,0 229,185 A 12,14 0 1,0 205,185 Z' },
      { id: 'lion-eye-right', labelVi: 'Mắt phải', d: 'M 271,185 A 12,14 0 1,0 295,185 A 12,14 0 1,0 271,185 Z' },
      { id: 'lion-paw-left', labelVi: 'Bàn chân trái', d: 'M 180,430 C 170,450 170,470 200,470 C 220,470 225,455 220,435 Z' },
      { id: 'lion-paw-right', labelVi: 'Bàn chân phải', d: 'M 320,430 C 330,450 330,470 300,470 C 280,470 275,455 280,435 Z' }
    ]
  },

  // 2. CHÚ VOI CON TINH NGHỊCH
  {
    id: 'animal-elephant',
    titleVi: 'Chú Voi Con Tinh Nghịch',
    titleEn: 'Playful Baby Elephant',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['voi', 'elephant', 'dễ thương'],
    regions: [
      { id: 'water-drop-1', labelVi: 'Giọt nước 1', d: 'M 380,100 C 370,120 390,130 380,140 C 365,130 365,115 380,100 Z' },
      { id: 'water-drop-2', labelVi: 'Giọt nước 2', d: 'M 410,130 C 400,150 420,160 410,170 C 395,160 395,145 410,130 Z' },
      { id: 'water-drop-3', labelVi: 'Giọt nước 3', d: 'M 340,90 C 330,110 350,120 340,130 C 325,120 325,105 340,90 Z' },
      { id: 'ele-ear-left', labelVi: 'Tai to trái', d: 'M 160,170 C 90,140 70,260 120,310 C 150,335 170,280 170,240 Z' },
      { id: 'ele-ear-left-in', labelVi: 'Lòng tai trái', d: 'M 150,190 C 105,170 95,250 125,285 C 145,300 155,260 155,230 Z' },
      { id: 'ele-ear-right', labelVi: 'Tai to phải', d: 'M 320,170 C 390,140 410,260 360,310 C 330,335 310,280 310,240 Z' },
      { id: 'ele-ear-right-in', labelVi: 'Lòng tai phải', d: 'M 330,190 C 375,170 385,250 355,285 C 335,300 325,260 325,230 Z' },
      { id: 'ele-body', labelVi: 'Thân voi', d: 'M 180,260 C 160,330 160,420 180,450 L 300,450 C 320,420 320,330 300,260 Z' },
      { id: 'ele-belly', labelVi: 'Bụng voi tròn', d: 'M 205,330 C 195,380 195,430 240,435 C 285,430 285,380 275,330 Z' },
      { id: 'ele-head', labelVi: 'Đầu voi', d: 'M 160,200 C 160,130 320,130 320,200 C 320,270 160,270 160,200 Z' },
      { id: 'ele-trunk', labelVi: 'Vòi voi uốn lượn', d: 'M 225,230 C 225,290 240,320 280,310 C 320,300 350,230 360,180 C 365,160 345,160 340,180 C 330,220 305,270 275,275 C 255,280 250,260 250,230 Z' },
      { id: 'ele-eye-left', labelVi: 'Mắt trái', d: 'M 195,190 A 10,12 0 1,0 215,190 A 10,12 0 1,0 195,190 Z' },
      { id: 'ele-eye-right', labelVi: 'Mắt phải', d: 'M 265,190 A 10,12 0 1,0 285,190 A 10,12 0 1,0 265,190 Z' },
      { id: 'ele-cheek-left', labelVi: 'Má hồng trái', d: 'M 175,225 A 14,10 0 1,0 203,225 A 14,10 0 1,0 175,225 Z' },
      { id: 'ele-cheek-right', labelVi: 'Má hồng phải', d: 'M 277,225 A 14,10 0 1,0 305,225 A 14,10 0 1,0 277,225 Z' },
      { id: 'ele-foot-left', labelVi: 'Chân trái', d: 'M 170,430 C 160,460 170,475 205,475 C 220,475 220,455 210,430 Z' },
      { id: 'ele-foot-right', labelVi: 'Chân phải', d: 'M 270,430 C 260,455 260,475 275,475 C 310,475 320,460 310,430 Z' }
    ]
  },

  // 3. GẤU TRÚC PANDA ĂN TRÚC
  {
    id: 'animal-panda',
    titleVi: 'Gấu Trúc Nhỏ & Nhành Trúc',
    titleEn: 'Cute Panda with Bamboo',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['gấu trúc', 'panda', 'trúc', 'cute'],
    regions: [
      { id: 'bamboo-stalk', labelVi: 'Thân tre trúc', d: 'M 350,150 L 365,150 L 360,460 L 345,460 Z' },
      { id: 'bamboo-leaf-1', labelVi: 'Lá trúc 1', d: 'M 365,180 Q 420,160 450,190 Q 400,205 365,190 Z' },
      { id: 'bamboo-leaf-2', labelVi: 'Lá trúc 2', d: 'M 345,240 Q 290,220 270,250 Q 320,265 345,250 Z' },
      { id: 'panda-ear-left', labelVi: 'Tai gấu trái', d: 'M 140,110 C 110,90 90,140 130,160 Z' },
      { id: 'panda-ear-right', labelVi: 'Tai gấu phải', d: 'M 310,110 C 340,90 360,140 320,160 Z' },
      { id: 'panda-body', labelVi: 'Thân trắng', d: 'M 150,290 C 120,350 120,420 160,460 L 290,460 C 330,420 330,350 300,290 Z' },
      { id: 'panda-belly', labelVi: 'Bụng trắng', d: 'M 180,330 C 160,380 160,430 225,440 C 290,430 290,380 270,330 Z' },
      { id: 'panda-arm-left', labelVi: 'Tay trái', d: 'M 150,270 C 110,290 100,350 145,360 C 170,365 180,320 165,280 Z' },
      { id: 'panda-arm-right', labelVi: 'Tay phải', d: 'M 300,270 C 340,290 350,350 305,360 C 280,365 270,320 285,280 Z' },
      { id: 'panda-leg-left', labelVi: 'Chân trái', d: 'M 130,430 C 110,465 140,485 180,480 C 190,460 170,435 150,430 Z' },
      { id: 'panda-leg-right', labelVi: 'Chân phải', d: 'M 320,430 C 340,465 310,485 270,480 C 260,460 280,435 300,430 Z' },
      { id: 'panda-head', labelVi: 'Khuôn mặt tròn', d: 'M 225,120 C 310,120 330,170 330,230 C 330,295 295,315 225,315 C 155,315 120,295 120,230 C 120,170 140,120 225,120 Z' },
      { id: 'panda-eye-patch-left', labelVi: 'Quầng mắt đen trái', d: 'M 160,195 C 150,175 190,165 200,190 C 210,215 170,225 160,195 Z' },
      { id: 'panda-eye-patch-right', labelVi: 'Quầng mắt đen phải', d: 'M 290,195 C 300,175 260,165 250,190 C 240,215 280,225 290,195 Z' },
      { id: 'panda-eye-left', labelVi: 'Con ngươi trái', d: 'M 175,190 A 6,6 0 1,0 187,190 A 6,6 0 1,0 175,190 Z' },
      { id: 'panda-eye-right', labelVi: 'Con ngươi phải', d: 'M 263,190 A 6,6 0 1,0 275,190 A 6,6 0 1,0 263,190 Z' },
      { id: 'panda-nose', labelVi: 'Mũi gấu', d: 'M 215,235 Q 225,230 235,235 Q 225,250 215,235 Z' }
    ]
  },

  // 4. CHÚ CÚN CON ĐÁNG YÊU
  {
    id: 'animal-puppy',
    titleVi: 'Chú Cún Con Tai Cụp',
    titleEn: 'Cute Puppy with Bone',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['chó', 'cún', 'dog', 'puppy'],
    regions: [
      { id: 'bone-left', labelVi: 'Đầu xương trái', d: 'M 200,430 C 180,420 180,450 200,445 Z' },
      { id: 'bone-center', labelVi: 'Thân khúc xương', d: 'M 200,432 L 280,432 L 280,443 L 200,443 Z' },
      { id: 'bone-right', labelVi: 'Đầu xương phải', d: 'M 280,430 C 300,420 300,450 280,445 Z' },
      { id: 'pup-ear-left', labelVi: 'Tai cụp trái', d: 'M 160,130 C 100,160 100,260 140,270 C 160,250 160,190 165,150 Z' },
      { id: 'pup-ear-right', labelVi: 'Tai cụp phải', d: 'M 320,130 C 380,160 380,260 340,270 C 320,250 320,190 315,150 Z' },
      { id: 'pup-tail', labelVi: 'Đuôi vẫy', d: 'M 330,360 C 390,340 430,280 410,270 C 395,270 380,310 330,340 Z' },
      { id: 'pup-body', labelVi: 'Thân cún', d: 'M 180,300 C 160,350 160,420 190,440 L 310,440 C 340,420 340,350 300,300 Z' },
      { id: 'pup-collar', labelVi: 'Vòng cổ cún', d: 'M 195,290 Q 240,315 285,290 L 290,305 Q 240,330 190,305 Z' },
      { id: 'pup-collar-tag', labelVi: 'Thẻ tên hình tim', d: 'M 235,315 C 230,305 220,315 240,335 C 260,315 250,305 245,315 Z' },
      { id: 'pup-head', labelVi: 'Đầu cún', d: 'M 160,180 C 160,110 320,110 320,180 C 320,270 160,270 160,180 Z' },
      { id: 'pup-spot', labelVi: 'Đốm mắt dễ thương', d: 'M 170,170 C 165,130 220,130 220,170 C 220,210 175,210 170,170 Z' },
      { id: 'pup-eye-left', labelVi: 'Mắt trái', d: 'M 185,175 A 9,11 0 1,0 203,175 A 9,11 0 1,0 185,175 Z' },
      { id: 'pup-eye-right', labelVi: 'Mắt phải', d: 'M 275,175 A 9,11 0 1,0 293,175 A 9,11 0 1,0 275,175 Z' },
      { id: 'pup-muzzle', labelVi: 'Mõm cún phúng phính', d: 'M 240,210 C 270,210 280,245 265,265 C 255,275 225,275 215,265 C 200,245 210,210 240,210 Z' },
      { id: 'pup-nose', labelVi: 'Mũi cún xinh', d: 'M 230,225 Q 240,220 250,225 Q 240,240 230,225 Z' },
      { id: 'pup-tongue', labelVi: 'Lưỡi le he', d: 'M 233,260 C 230,280 250,280 247,260 Z' },
      { id: 'pup-paw-left', labelVi: 'Chân trước trái', d: 'M 180,410 C 175,445 210,445 210,410 Z' },
      { id: 'pup-paw-right', labelVi: 'Chân trước phải', d: 'M 270,410 C 270,445 305,445 300,410 Z' }
    ]
  },

  // 5. THỎ NGỌC ÔM CÀ RỐT
  {
    id: 'animal-bunny',
    titleVi: 'Thỏ Ngọc Ôm Cà Rốt',
    titleEn: 'Bunny with Big Carrot',
    category: 'animals',
    difficulty: 'easy',
    viewBox: '0 0 500 500',
    tags: ['thỏ', 'bunny', 'rabbit', 'cà rốt'],
    regions: [
      { id: 'carrot-top', labelVi: 'Lá cà rốt xanh', d: 'M 350,280 C 340,240 370,230 380,260 C 390,220 420,240 405,270 C 430,260 435,290 400,295 Z' },
      { id: 'carrot-body', labelVi: 'Củ cà rốt cam', d: 'M 350,300 C 390,290 400,320 380,360 L 320,440 L 310,430 L 340,340 Z' },
      { id: 'bunny-ear-left-out', labelVi: 'Tai thỏ dài trái', d: 'M 180,180 C 140,110 150,40 190,50 C 220,60 215,130 205,180 Z' },
      { id: 'bunny-ear-left-in', labelVi: 'Lòng tai hồng trái', d: 'M 185,160 C 160,110 165,65 190,70 C 205,75 205,120 198,160 Z' },
      { id: 'bunny-ear-right-out', labelVi: 'Tai thỏ dài phải', d: 'M 270,180 C 260,130 255,60 285,50 C 325,40 335,110 295,180 Z' },
      { id: 'bunny-ear-right-in', labelVi: 'Lòng tai hồng phải', d: 'M 277,160 C 270,120 270,75 285,70 C 310,65 315,110 290,160 Z' },
      { id: 'bunny-body', labelVi: 'Thân thỏ', d: 'M 170,290 C 130,340 130,420 170,450 L 290,450 C 330,420 330,340 290,290 Z' },
      { id: 'bunny-belly', labelVi: 'Bụng thỏ mịn', d: 'M 190,320 C 170,360 170,410 230,425 C 290,410 290,360 270,320 Z' },
      { id: 'bunny-head', labelVi: 'Đầu thỏ tròn', d: 'M 160,220 C 160,160 300,160 300,220 C 300,285 160,285 160,220 Z' },
      { id: 'bunny-eye-left', labelVi: 'Mắt đen láy trái', d: 'M 195,210 A 8,11 0 1,0 211,210 A 8,11 0 1,0 195,210 Z' },
      { id: 'bunny-eye-right', labelVi: 'Mắt đen láy phải', d: 'M 255,210 A 8,11 0 1,0 271,210 A 8,11 0 1,0 255,210 Z' },
      { id: 'bunny-cheek-left', labelVi: 'Má hồng trái', d: 'M 175,235 A 12,8 0 1,0 199,235 A 12,8 0 1,0 175,235 Z' },
      { id: 'bunny-cheek-right', labelVi: 'Má hồng phải', d: 'M 265,235 A 12,8 0 1,0 289,235 A 12,8 0 1,0 265,235 Z' },
      { id: 'bunny-nose', labelVi: 'Mũi tam giác hồng', d: 'M 226,230 Q 233,225 240,230 Q 233,240 226,230 Z' },
      { id: 'bunny-paw-left', labelVi: 'Tay ôm trái', d: 'M 180,310 C 170,340 210,350 220,320 Z' },
      { id: 'bunny-paw-right', labelVi: 'Tay ôm phải', d: 'M 280,310 C 290,340 250,350 240,320 Z' },
      { id: 'bunny-foot-left', labelVi: 'Bàn chân thỏ trái', d: 'M 150,440 C 130,465 170,480 200,470 C 205,450 185,440 150,440 Z' },
      { id: 'bunny-foot-right', labelVi: 'Bàn chân thỏ phải', d: 'M 310,440 C 330,465 290,480 260,470 C 255,450 275,440 310,440 Z' }
    ]
  }
];

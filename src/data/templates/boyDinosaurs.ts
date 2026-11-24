import { ColoringTemplate } from '../../types';

export const BOY_DINOSAURS_TEMPLATES: ColoringTemplate[] = [
  // 1. BẠO CHÚA T-REX GẦM VANG (MIGHTY T-REX)
  {
    id: 'dino-trex-mighty',
    titleVi: 'Bạo Chúa T-Rex Gầm Vang',
    titleEn: 'Mighty Roaring T-Rex',
    category: 'dinosaurs',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['t-rex', 'khủng long', 'dinosaur', 'bạo chúa', 'bé trai'],
    regions: [
      // Volcano & Prehistoric Background
      { id: 'bg-volcano', labelVi: 'Núi lửa phun trào', d: 'M 320,280 L 390,140 L 415,140 L 485,280 Z' },
      { id: 'volcano-smoke', labelVi: 'Khói dung nham', d: 'M 390,140 C 375,100 400,70 420,90 C 440,65 470,85 460,110 C 475,130 450,150 415,140 Z' },
      { id: 'lava-stream', labelVi: 'Dòng dung nham đỏ', d: 'M 400,140 Q 405,200 395,240 Q 410,210 405,140 Z' },
      { id: 'flying-pterodactyl', labelVi: 'Khủng long bay xa xa', d: 'M 80,90 L 110,105 L 140,90 L 115,100 Z' },

      // T-Rex Massive Head & Jaws
      { id: 'trex-head-top', labelVi: 'Đỉnh đầu T-Rex uy mãnh', d: 'M 140,160 C 130,100 230,90 270,120 C 290,135 295,160 275,175 L 210,175 C 190,175 160,185 140,160 Z' },
      { id: 'trex-snout-ridge', labelVi: 'Sống mũi gồ ghề', d: 'M 220,110 C 240,115 270,130 275,150 L 255,155 C 240,135 220,125 220,110 Z' },
      
      // Fierce but Cool Eye
      { id: 'trex-eye-brow', labelVi: 'Gờ mày ngầu', d: 'M 195,115 C 215,120 225,135 220,145 C 205,145 195,130 195,115 Z' },
      { id: 'trex-eye', labelVi: 'Mắt bạo chúa vàng rực', d: 'M 200,130 A 8,8 0 1,0 216,130 A 8,8 0 1,0 200,130 Z' },
      { id: 'trex-eye-pupil', labelVi: 'Con ngươi sắc bén', d: 'M 206,124 L 210,124 L 210,136 L 206,136 Z' },

      // Roaring Jaws & Sharp Teeth
      { id: 'trex-mouth-open', labelVi: 'Vòm miệng gầm đỏ', d: 'M 205,175 L 275,175 C 265,225 225,230 195,210 Z' },
      { id: 'trex-teeth-top', labelVi: 'Hàng răng nanh trên', d: 'M 210,175 L 217,188 L 224,175 L 232,190 L 240,175 L 250,192 L 260,175 L 270,190 L 275,175 Z' },
      { id: 'trex-jaw-lower', labelVi: 'Hàm dưới khỏe khoắn', d: 'M 185,210 C 215,225 260,225 270,195 L 265,235 C 235,250 195,245 180,220 Z' },
      { id: 'trex-teeth-bottom', labelVi: 'Hàng răng nhọn dưới', d: 'M 200,215 L 208,203 L 216,215 L 226,201 L 236,215 L 246,203 L 256,215 Z' },

      // Muscular Neck & Body
      { id: 'trex-neck', labelVi: 'Cổ lực lưỡng', d: 'M 140,160 C 120,200 115,250 135,290 L 180,260 C 160,220 160,190 185,210 Z' },
      { id: 'trex-body-back', labelVi: 'Lưng và thân mình', d: 'M 125,280 C 100,320 85,360 110,410 C 130,440 180,440 220,400 C 270,390 380,340 460,260 C 390,300 310,310 250,330 C 210,330 170,310 135,290 Z' },
      { id: 'trex-belly-plates', labelVi: 'Bụng giáp vàng', d: 'M 140,290 C 130,340 145,390 185,410 C 215,400 230,360 220,330 C 180,310 150,295 140,290 Z' },

      // Spikes along back
      { id: 'trex-spike-1', labelVi: 'Gai lưng nhọn 1', d: 'M 155,140 L 140,125 L 145,150 Z' },
      { id: 'trex-spike-2', labelVi: 'Gai lưng nhọn 2', d: 'M 130,190 L 110,180 L 125,205 Z' },
      { id: 'trex-spike-3', labelVi: 'Gai lưng nhọn 3', d: 'M 115,245 L 95,240 L 115,265 Z' },
      { id: 'trex-spike-4', labelVi: 'Gai lưng nhọn 4', d: 'M 105,305 L 80,305 L 105,330 Z' },
      { id: 'trex-spike-5', labelVi: 'Gai đuôi 5', d: 'M 290,320 L 315,295 L 315,325 Z' },
      { id: 'trex-spike-6', labelVi: 'Gai đuôi 6', d: 'M 370,295 L 400,270 L 395,300 Z' },

      // Tiny Sharp Arms
      { id: 'trex-arm-left', labelVi: 'Tay móng vuốt trước', d: 'M 175,275 C 195,280 205,300 195,315 C 185,315 180,305 170,295 Z' },
      { id: 'trex-claws-left', labelVi: 'Móng vuốt tay', d: 'M 195,315 L 205,312 L 200,322 Z' },

      // Massive Legs & Talons
      { id: 'trex-thigh-front', labelVi: 'Đùi sau cuồn cuộn', d: 'M 160,370 C 160,420 185,450 220,445 C 245,410 240,360 220,340 Z' },
      { id: 'trex-foot-front', labelVi: 'Bàn chân giẫm đất', d: 'M 195,430 L 185,475 L 245,475 L 235,435 Z' },
      { id: 'trex-claws-foot', labelVi: 'Bộ móng vuốt chân', d: 'M 185,475 L 175,485 L 195,480 L 210,488 L 225,480 L 245,485 Z' },

      // Prehistoric Rocks & Fern
      { id: 'rock-left', labelVi: 'Tảng đá tiền sử', d: 'M 20,440 L 90,420 L 140,460 L 110,485 L 30,485 Z' },
      { id: 'fern-leaf-1', labelVi: 'Lá dương xỉ cổ đại', d: 'M 40,420 Q 70,360 60,330 Q 80,360 70,420 Z' },
      { id: 'ground-dirt', labelVi: 'Mặt đất tiền sử', d: 'M 0,470 L 500,470 L 500,500 L 0,500 Z' }
    ]
  },

  // 2. KHỦNG LONG BA SỪNG TRICERATOPS DŨNG MÃNH
  {
    id: 'dino-triceratops-hero',
    titleVi: 'Khủng Long Ba Sừng Chiến Đấu',
    titleEn: 'Armored Triceratops',
    category: 'dinosaurs',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['ba sừng', 'triceratops', 'khủng long', 'dino', 'giáp'],
    regions: [
      // Massive Frill Shield (Tấm khiên cổ gai nhọn)
      { id: 'tri-frill-outer', labelVi: 'Tấm khiên chắn cổ uy nghi', d: 'M 200,100 C 230,60 300,50 350,90 C 390,130 400,200 370,250 L 260,180 Z' },
      { id: 'tri-frill-spikes', labelVi: 'Gai viền khiên cổ', d: 'M 210,95 L 225,75 L 245,90 L 265,70 L 285,85 L 310,65 L 330,85 L 355,75 L 365,100 L 385,105 L 380,130 L 398,145 L 385,170 L 398,195 L 375,215 Z' },
      { id: 'tri-frill-pattern-1', labelVi: 'Họa tiết đốm khiên 1', d: 'M 255,115 A 16,16 0 1,0 287,115 A 16,16 0 1,0 255,115 Z' },
      { id: 'tri-frill-pattern-2', labelVi: 'Họa tiết đốm khiên 2', d: 'M 320,135 A 18,18 0 1,0 356,135 A 18,18 0 1,0 320,135 Z' },

      // Two Giant Brow Horns (2 sừng trán dài nhọn)
      { id: 'tri-horn-l', labelVi: 'Sừng dài trái nhọn hoắt', d: 'M 205,130 L 110,60 L 190,150 Z' },
      { id: 'tri-horn-r', labelVi: 'Sừng dài phải', d: 'M 265,115 L 220,35 L 275,135 Z' },

      // Beak & Nose Horn
      { id: 'tri-horn-nose', labelVi: 'Sừng mũi nhọn trước', d: 'M 105,230 L 50,195 L 115,245 Z' },
      { id: 'tri-beak', labelVi: 'Mỏ vẹt cứng cáp', d: 'M 75,235 C 65,270 100,285 130,275 L 120,240 Z' },
      { id: 'tri-head', labelVi: 'Khuôn mặt giáp sừng', d: 'M 120,220 C 130,165 200,150 250,180 C 270,230 230,280 160,280 C 120,280 115,250 120,220 Z' },
      { id: 'tri-eye', labelVi: 'Mắt tinh anh', d: 'M 185,195 A 9,9 0 1,0 203,195 A 9,9 0 1,0 185,195 Z' },

      // Strong Armored Body
      { id: 'tri-body', labelVi: 'Thân hình bọc giáp vạm vỡ', d: 'M 250,230 C 290,190 390,195 430,260 C 470,300 485,340 495,335 C 475,370 420,390 380,390 L 260,390 C 230,340 220,280 250,230 Z' },
      { id: 'tri-plate-1', labelVi: 'Gờ da sần 1', d: 'M 290,260 A 15,12 0 1,0 320,260 A 15,12 0 1,0 290,260 Z' },
      { id: 'tri-plate-2', labelVi: 'Gờ da sần 2', d: 'M 350,265 A 18,14 0 1,0 386,265 A 18,14 0 1,0 350,265 Z' },

      // 4 Powerful Legs
      { id: 'tri-leg-fl', labelVi: 'Chân trước trái', d: 'M 225,350 L 220,450 L 265,450 L 275,350 Z' },
      { id: 'tri-nails-fl', labelVi: 'Móng guốc trước trái', d: 'M 220,450 L 230,465 L 245,455 L 255,465 L 265,450 Z' },
      { id: 'tri-leg-bl', labelVi: 'Chân sau to lớn', d: 'M 345,350 L 340,450 L 390,450 L 400,350 Z' },
      { id: 'tri-nails-bl', labelVi: 'Móng guốc sau', d: 'M 340,450 L 350,465 L 365,455 L 380,465 L 390,450 Z' },
      { id: 'tri-ground', labelVi: 'Mặt đất sỏi đá', d: 'M 10,450 L 490,450 L 490,490 L 10,490 Z' }
    ]
  },

  // 3. KHỦNG LONG BAY PTERODACTYL
  {
    id: 'dino-pterodactyl-soar',
    titleVi: 'Khủng Long Bay Săn Mồi',
    titleEn: 'Soaring Pterodactyl',
    category: 'dinosaurs',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['thằn lằn bay', 'pterodactyl', 'khủng long bay', 'bầu trời'],
    regions: [
      { id: 'sky-cloud-1', labelVi: 'Đám mây cao', d: 'M 60,60 C 60,30 130,25 155,55 C 180,40 220,60 215,85 L 60,85 Z' },
      { id: 'sky-cloud-2', labelVi: 'Đám mây phiêu bạt', d: 'M 340,360 C 340,320 420,310 445,345 C 475,335 495,370 475,400 L 340,400 Z' },

      // Crest & Head
      { id: 'ptero-crest', labelVi: 'Mào sừng đầu dài nhọn', d: 'M 240,160 C 270,100 320,70 360,60 C 330,110 300,160 270,180 Z' },
      { id: 'ptero-head', labelVi: 'Đầu thằn lằn bay', d: 'M 210,180 C 210,160 260,160 270,180 L 260,220 L 205,210 Z' },
      { id: 'ptero-eye', labelVi: 'Mắt tinh nhạy', d: 'M 225,180 A 6,6 0 1,0 237,180 A 6,6 0 1,0 225,180 Z' },

      // Long Beak with Fish
      { id: 'ptero-beak-upper', labelVi: 'Mỏ nhọn trên', d: 'M 210,190 L 90,195 L 210,210 Z' },
      { id: 'ptero-beak-lower', labelVi: 'Mỏ nhọn dưới', d: 'M 210,210 L 110,215 L 215,225 Z' },
      { id: 'caught-fish', labelVi: 'Chú cá ngậm trong mỏ', d: 'M 130,200 C 150,190 165,220 145,230 C 135,225 125,210 130,200 Z' },

      // Giant Wings
      { id: 'wing-left-top', labelVi: 'Khung cánh trái', d: 'M 220,230 L 100,260 L 30,220 L 60,280 L 180,310 Z' },
      { id: 'wing-left-membrane', labelVi: 'Màng cánh da trái', d: 'M 60,280 C 100,340 160,330 200,310 L 220,300 L 180,310 Z' },
      { id: 'wing-right-top', labelVi: 'Khung cánh phải vút cao', d: 'M 260,230 L 390,180 L 470,120 L 450,210 L 300,290 Z' },
      { id: 'wing-right-membrane', labelVi: 'Màng cánh da phải', d: 'M 450,210 C 430,290 350,300 290,290 Z' },

      // Body & Claws
      { id: 'ptero-body', labelVi: 'Thân thon gọn', d: 'M 220,220 L 270,220 L 260,330 L 230,330 Z' },
      { id: 'ptero-claw-l', labelVi: 'Vuốt chân trái', d: 'M 225,330 L 215,365 L 235,360 Z' },
      { id: 'ptero-claw-r', labelVi: 'Vuốt chân phải', d: 'M 255,330 L 250,365 L 270,360 Z' }
    ]
  }
];

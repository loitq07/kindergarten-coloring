import { ColoringTemplate } from '../../types';

export const BOY_VEHICLES_TEMPLATES: ColoringTemplate[] = [
  // 1. SIÊU XE ĐUA THỂ THAO F1
  {
    id: 'car-super-race',
    titleVi: 'Siêu Xe Đua Thể Thao',
    titleEn: 'Super Sport Racing Car',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['xe đua', 'siêu xe', 'racing car', 'thể thao', 'bé trai'],
    regions: [
      // Racing Checkered Flag
      { id: 'flag-pole', labelVi: 'Cột cờ đích', d: 'M 400,60 L 405,60 L 405,250 L 400,250 Z' },
      { id: 'flag-cloth', labelVi: 'Cờ ca-rô về đích', d: 'M 405,60 C 440,55 450,90 485,85 L 485,150 C 450,155 440,120 405,125 Z' },
      { id: 'exhaust-flame', labelVi: 'Ngọn lửa pô phụt', d: 'M 435,320 C 475,310 495,335 485,345 C 470,350 445,340 435,335 Z' },

      // Sport Rear Wing / Spoiler
      { id: 'spoiler-wing', labelVi: 'Cánh gió thể thao đuôi xe', d: 'M 370,215 L 440,205 L 440,225 L 370,230 Z' },
      { id: 'spoiler-strut', labelVi: 'Chân đỡ cánh gió', d: 'M 390,225 L 400,225 L 400,265 L 390,265 Z' },

      // Aerodynamic Cockpit & Roof
      { id: 'cockpit-roof', labelVi: 'Mui xe khí động học', d: 'M 190,220 C 230,165 320,165 370,220 Z' },
      { id: 'cockpit-windshield', labelVi: 'Kính chắn gió đen bóng', d: 'M 205,220 C 235,180 295,180 305,220 Z' },
      { id: 'cockpit-side-window', labelVi: 'Kính cửa sổ bên', d: 'M 315,220 C 320,185 350,185 360,220 Z' },

      // Sleek Sports Body & Hood
      { id: 'car-hood-front', labelVi: 'Mũi xe thể thao vát nhọn', d: 'M 60,320 C 60,285 110,240 200,235 L 380,235 C 430,240 445,280 435,330 L 70,330 Z' },
      { id: 'hood-racing-stripe', labelVi: 'Dải sọc đua thể thao', d: 'M 140,250 L 175,245 L 350,245 L 350,265 L 140,265 Z' },
      { id: 'race-number-circle', labelVi: 'Vòng tròn số xe đua', d: 'M 240,285 A 25,25 0 1,0 290,285 A 25,25 0 1,0 240,285 Z' },
      { id: 'headlight-front', labelVi: 'Đèn pha LED vuốt nhọn', d: 'M 65,290 L 105,275 L 100,305 Z' },

      // Front Wheel & Sport Rim
      { id: 'wheel-front-tire', labelVi: 'Lốp xe đua trước', d: 'M 105,335 A 48,48 0 1,0 201,335 A 48,48 0 1,0 105,335 Z' },
      { id: 'wheel-front-rim', labelVi: 'Vành đúc thể thao trước', d: 'M 129,335 A 24,24 0 1,0 177,335 A 24,24 0 1,0 129,335 Z' },
      { id: 'wheel-front-center', labelVi: 'Trục mâm trước', d: 'M 145,335 A 8,8 0 1,0 161,335 A 8,8 0 1,0 145,335 Z' },

      // Rear Wheel & Sport Rim
      { id: 'wheel-back-tire', labelVi: 'Lốp xe đua sau to khỏe', d: 'M 305,335 A 50,50 0 1,0 405,335 A 50,50 0 1,0 305,335 Z' },
      { id: 'wheel-back-rim', labelVi: 'Vành đúc thể thao sau', d: 'M 330,335 A 25,25 0 1,0 380,335 A 25,25 0 1,0 330,335 Z' },
      { id: 'wheel-back-center', labelVi: 'Trục mâm sau', d: 'M 347,335 A 8,8 0 1,0 363,335 A 8,8 0 1,0 347,335 Z' },

      // Speed Smoke & Track
      { id: 'speed-smoke', labelVi: 'Khói lốp xoáy tốc độ', d: 'M 30,360 C 50,330 90,345 100,370 C 80,380 40,380 30,360 Z' },
      { id: 'racetrack', labelVi: 'Đường đua Asphalt', d: 'M 0,380 L 500,380 L 500,470 L 0,470 Z' },
      { id: 'track-curb', labelVi: 'Gờ giảm tốc đỏ trắng', d: 'M 0,470 L 500,470 L 500,490 L 0,490 Z' }
    ]
  },

  // 2. XE TẢI QUÁI VẬT BÁNH TO (MONSTER TRUCK)
  {
    id: 'car-monster-truck',
    titleVi: 'Xe Tải Quái Vật Bánh To',
    titleEn: 'Big-Wheel Monster Truck',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['monster truck', 'xe tải quái vật', 'bánh to', 'bé trai'],
    regions: [
      // Roof Light Bar
      { id: 'roof-lights', labelVi: 'Dàn 4 đèn pha nóc', d: 'M 200,105 L 320,105 L 320,125 L 200,125 Z' },
      { id: 'light-1', labelVi: 'Đèn 1', d: 'M 205,108 A 7,7 0 1,0 219,108 A 7,7 0 1,0 205,108 Z' },
      { id: 'light-2', labelVi: 'Đèn 2', d: 'M 235,108 A 7,7 0 1,0 249,108 A 7,7 0 1,0 235,108 Z' },
      { id: 'light-3', labelVi: 'Đèn 3', d: 'M 265,108 A 7,7 0 1,0 279,108 A 7,7 0 1,0 265,108 Z' },
      { id: 'light-4', labelVi: 'Đèn 4', d: 'M 295,108 A 7,7 0 1,0 309,108 A 7,7 0 1,0 295,108 Z' },

      // Truck Cabin & Window
      { id: 'truck-cab-top', labelVi: 'Nóc cabin hầm hố', d: 'M 190,125 L 330,125 L 350,185 L 170,185 Z' },
      { id: 'truck-windshield', labelVi: 'Kính trước nghiêng', d: 'M 185,135 L 250,135 L 245,175 L 175,175 Z' },
      { id: 'truck-side-window', labelVi: 'Kính bên hông', d: 'M 260,135 L 320,135 L 335,175 L 255,175 Z' },

      // Truck Body with Flame Graphic
      { id: 'truck-body-main', labelVi: 'Thân xe tải quái vật', d: 'M 80,240 C 75,200 120,190 170,185 L 380,185 C 410,190 435,210 430,260 L 380,260 L 370,235 L 140,235 L 130,260 L 80,260 Z' },
      { id: 'truck-flame-decal', labelVi: 'Họa tiết ngọn lửa rực cháy', d: 'M 110,210 C 150,210 180,195 210,210 C 190,215 170,220 185,230 C 160,230 135,220 110,210 Z' },

      // High Suspension Springs (Lò xo nhún gầm cao)
      { id: 'suspension-front', labelVi: 'Lò xo nhún trước', d: 'M 140,260 L 160,260 L 155,320 L 135,320 Z' },
      { id: 'suspension-rear', labelVi: 'Lò xo nhún sau', d: 'M 340,260 L 360,260 L 355,320 L 335,320 Z' },

      // Giant Front Monster Tire (Lốp gai khổng lồ)
      { id: 'tire-front-giant', labelVi: 'Lốp gai khổng lồ trước', d: 'M 70,335 A 70,70 0 1,0 210,335 A 70,70 0 1,0 70,335 Z' },
      { id: 'rim-front-giant', labelVi: 'Mâm xe sắt trước', d: 'M 105,335 A 35,35 0 1,0 175,335 A 35,35 0 1,0 105,335 Z' },
      { id: 'hub-front', labelVi: 'Trục ốc bánh trước', d: 'M 125,335 A 15,15 0 1,0 155,335 A 15,15 0 1,0 125,335 Z' },

      // Giant Rear Monster Tire
      { id: 'tire-rear-giant', labelVi: 'Lốp gai khổng lồ sau', d: 'M 285,335 A 70,70 0 1,0 425,335 A 70,70 0 1,0 285,335 Z' },
      { id: 'rim-rear-giant', labelVi: 'Mâm xe sắt sau', d: 'M 320,335 A 35,35 0 1,0 390,335 A 35,35 0 1,0 320,335 Z' },
      { id: 'hub-rear', labelVi: 'Trục ốc bánh sau', d: 'M 340,335 A 15,15 0 1,0 370,335 A 15,15 0 1,0 340,335 Z' },

      // Dirt Mound Ramp
      { id: 'dirt-ramp', labelVi: 'Gò đất dốc leo', d: 'M 0,420 Q 200,380 500,440 L 500,500 L 0,500 Z' }
    ]
  },

  // 3. XE MÁY MÚC CÔNG TRÌNH (EXCAVATOR DIGGER)
  {
    id: 'car-excavator',
    titleVi: 'Xe Máy Múc Công Trình',
    titleEn: 'Heavy Construction Excavator',
    category: 'vehicles',
    difficulty: 'hard',
    viewBox: '0 0 500 500',
    tags: ['máy múc', 'máy xúc', 'công trường', 'excavator', 'bé trai'],
    regions: [
      // Excavator Bucket & Boom Arm
      { id: 'digger-bucket', labelVi: 'Gầu múc đất răng nhọn', d: 'M 40,260 C 20,320 70,360 110,330 L 105,280 L 75,270 Z' },
      { id: 'bucket-teeth', labelVi: 'Răng gầu cào đất', d: 'M 40,260 L 30,275 L 45,280 L 35,295 L 50,300 L 40,315 L 60,320 Z' },
      { id: 'arm-stick', labelVi: 'Tay cần múc 1', d: 'M 95,275 L 210,180 L 225,200 L 115,290 Z' },
      { id: 'arm-hydraulic-1', labelVi: 'Xi-lanh thủy lực 1', d: 'M 130,285 L 185,225 L 195,235 L 140,295 Z' },
      { id: 'arm-boom', labelVi: 'Cần cẩu chính cong vút', d: 'M 205,185 C 240,110 270,120 290,260 L 260,260 C 245,160 225,160 195,195 Z' },
      { id: 'arm-hydraulic-2', labelVi: 'Xi-lanh nâng cần', d: 'M 260,200 L 285,165 L 295,172 L 270,210 Z' },

      // Cabin & Operator
      { id: 'excavator-cab', labelVi: 'Cabin lái kính tròn', d: 'M 230,230 L 330,230 L 330,340 L 230,340 Z' },
      { id: 'cab-window-large', labelVi: 'Kính cabin bao quát', d: 'M 240,240 L 315,240 L 315,310 L 240,310 Z' },
      { id: 'excavator-engine-hood', labelVi: 'Thùng máy đuôi xe vàng', d: 'M 330,260 L 410,260 C 430,260 435,285 430,340 L 330,340 Z' },

      // Caterpillar Tracks (Bánh xích xe tăng)
      { id: 'track-frame', labelVi: 'Khung xích sắt', d: 'M 200,360 C 180,360 180,440 200,440 L 420,440 C 440,440 440,360 420,360 Z' },
      { id: 'track-wheel-1', labelVi: 'Bánh lăn xích 1', d: 'M 205,375 A 25,25 0 1,0 255,375 A 25,25 0 1,0 205,375 Z' },
      { id: 'track-wheel-2', labelVi: 'Bánh lăn xích 2', d: 'M 265,375 A 25,25 0 1,0 315,375 A 25,25 0 1,0 265,375 Z' },
      { id: 'track-wheel-3', labelVi: 'Bánh lăn xích 3', d: 'M 325,375 A 25,25 0 1,0 375,375 A 25,25 0 1,0 325,375 Z' },
      { id: 'track-wheel-4', labelVi: 'Bánh lăn xích 4', d: 'M 385,375 A 25,25 0 1,0 435,375 A 25,25 0 1,0 385,375 Z' },

      // Construction Earth & Rocks
      { id: 'dirt-pile', labelVi: 'Đống đất công trình', d: 'M 10,430 Q 120,370 200,440 L 10,440 Z' },
      { id: 'ground-level', labelVi: 'Mặt bằng công trường', d: 'M 0,440 L 500,440 L 500,490 L 0,490 Z' }
    ]
  },

  // 4. MÁY BAY CHIẾN ĐẤU PHẢN LỰC
  {
    id: 'vehicle-fighter-jet',
    titleVi: 'Máy Bay Phản Lực Siêu Thanh',
    titleEn: 'Supersonic Fighter Jet',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['máy bay', 'phản lực', 'fighter jet', 'quân sự', 'bé trai'],
    regions: [
      { id: 'jet-afterburner-flame', labelVi: 'Lửa phản lực xanh cam', d: 'M 410,230 C 470,225 495,245 495,250 C 495,255 470,275 410,270 Z' },
      { id: 'jet-afterburner-core', labelVi: 'Lõi lửa rực sáng', d: 'M 410,240 C 450,238 465,248 465,250 C 465,252 450,262 410,260 Z' },

      // Jet Nose & Fuselage
      { id: 'jet-nose-cone', labelVi: 'Mũi nhọn xé gió', d: 'M 60,250 L 130,225 L 130,275 Z' },
      { id: 'jet-cockpit-canopy', labelVi: 'Vòm kính phi công xanh', d: 'M 130,225 C 165,190 230,195 250,235 L 130,235 Z' },
      { id: 'jet-body-fuselage', labelVi: 'Thân tiêm kích xám bạc', d: 'M 130,235 L 410,225 L 410,275 L 130,265 Z' },

      // Delta Wings
      { id: 'jet-wing-upper', labelVi: 'Cánh tam giác trên', d: 'M 220,225 L 340,90 L 380,95 L 350,225 Z' },
      { id: 'jet-wing-lower', labelVi: 'Cánh tam giác dưới', d: 'M 220,275 L 340,410 L 380,405 L 350,275 Z' },

      // Missiles on Wingtips
      { id: 'missile-upper', labelVi: 'Tên lửa cánh trên', d: 'M 320,85 L 390,85 L 390,95 L 320,95 Z' },
      { id: 'missile-lower', labelVi: 'Tên lửa cánh dưới', d: 'M 320,405 L 390,405 L 390,415 L 320,415 Z' },

      // Twin Tail Fins
      { id: 'jet-tail-fin-1', labelVi: 'Đuôi đứng 1', d: 'M 360,225 L 415,130 L 440,135 L 410,225 Z' },

      // Clouds
      { id: 'jet-cloud-1', labelVi: 'Mây tầng cao 1', d: 'M 40,110 C 40,80 100,75 125,95 C 145,80 185,95 180,125 L 40,125 Z' },
      { id: 'jet-cloud-2', labelVi: 'Mây tầng cao 2', d: 'M 140,380 C 140,350 200,345 225,365 C 245,350 285,365 280,395 L 140,395 Z' }
    ]
  }
];

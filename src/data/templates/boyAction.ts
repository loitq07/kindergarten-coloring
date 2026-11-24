import { ColoringTemplate } from '../../types';

export const BOY_ACTION_TEMPLATES: ColoringTemplate[] = [
  // 1. ROBOT CHIẾN BINH TITAN (TITAN WARRIOR MECH)
  {
    id: 'robot-titan-warrior',
    titleVi: 'Robot Chiến Binh Titan',
    titleEn: 'Titan Battle Mech Robot',
    category: 'robots',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['robot', 'người máy', 'chiến binh', 'titan', 'mech', 'bé trai'],
    regions: [
      // Antenna & Helmet
      { id: 'bot-antenna-l', labelVi: 'Ăng-ten radar trái', d: 'M 190,70 L 180,30 L 195,45 L 200,70 Z' },
      { id: 'bot-antenna-r', labelVi: 'Ăng-ten radar phải', d: 'M 310,70 L 320,30 L 305,45 L 300,70 Z' },
      { id: 'bot-helmet-crest', labelVi: 'Mào thép chiến binh', d: 'M 225,50 L 250,30 L 275,50 L 270,75 L 230,75 Z' },
      { id: 'bot-head-armor', labelVi: 'Mũ giáp bảo vệ đầu', d: 'M 195,70 C 190,110 205,145 250,145 C 295,145 310,110 305,70 Z' },
      { id: 'bot-visor-eye', labelVi: 'Kính mắt cảm biến phát sáng', d: 'M 215,95 L 285,95 L 280,115 L 220,115 Z' },
      { id: 'bot-mouth-grille', labelVi: 'Lưới tản nhiệt miệng', d: 'M 235,125 L 265,125 L 260,138 L 240,138 Z' },

      // Massive Shoulder Armor
      { id: 'bot-shoulder-l', labelVi: 'Giáp vai chiến đấu trái', d: 'M 120,140 L 195,130 L 185,190 L 110,180 Z' },
      { id: 'bot-shoulder-r', labelVi: 'Giáp vai chiến đấu phải', d: 'M 305,130 L 380,140 L 390,180 L 315,190 Z' },

      // Chest & Glowing Arc Energy Core
      { id: 'bot-chest-plate', labelVi: 'Áo giáp ngực titan', d: 'M 195,145 L 305,145 L 320,230 L 180,230 Z' },
      { id: 'bot-arc-reactor', labelVi: 'Lõi năng lượng nguyên tử', d: 'M 225,185 A 25,25 0 1,0 275,185 A 25,25 0 1,0 225,185 Z' },
      { id: 'bot-reactor-core', labelVi: 'Tâm năng lượng xanh biếc', d: 'M 238,185 A 12,12 0 1,0 262,185 A 12,12 0 1,0 238,185 Z' },
      { id: 'bot-waist-belt', labelVi: 'Thắt lưng cơ khí', d: 'M 205,230 L 295,230 L 285,270 L 215,270 Z' },

      // Left Arm: Laser Cannon Blaster
      { id: 'bot-arm-l-bicep', labelVi: 'Bắp tay cơ bắp trái', d: 'M 125,185 L 175,195 L 165,245 L 120,235 Z' },
      { id: 'bot-arm-l-cannon', labelVi: 'Nòng đại bác laser', d: 'M 90,240 L 155,245 L 140,320 L 75,305 Z' },
      { id: 'bot-laser-blast', labelVi: 'Tia năng lượng bắn ra', d: 'M 60,300 L 15,310 L 65,330 L 75,315 Z' },

      // Right Arm: Power Fist
      { id: 'bot-arm-r-bicep', labelVi: 'Bắp tay thép phải', d: 'M 325,195 L 375,185 L 380,235 L 335,245 Z' },
      { id: 'bot-fist-r', labelVi: 'Nắm đấm titan khổng lồ', d: 'M 345,245 L 415,240 L 425,310 L 355,315 Z' },

      // Heavy Legs & Thrusters
      { id: 'bot-thigh-l', labelVi: 'Đùi giáp trái', d: 'M 195,270 L 245,270 L 235,350 L 185,350 Z' },
      { id: 'bot-thigh-r', labelVi: 'Đùi giáp phải', d: 'M 255,270 L 305,270 L 315,350 L 265,350 Z' },
      { id: 'bot-shin-l', labelVi: 'Ống đồng bọc thép trái', d: 'M 175,350 L 235,350 L 230,440 L 165,440 Z' },
      { id: 'bot-shin-r', labelVi: 'Ống đồng bọc thép phải', d: 'M 265,350 L 325,350 L 335,440 L 270,440 Z' },
      { id: 'bot-foot-l', labelVi: 'Bàn chân phản lực trái', d: 'M 150,440 L 240,440 L 240,475 L 140,475 Z' },
      { id: 'bot-foot-r', labelVi: 'Bàn chân phản lực phải', d: 'M 260,440 L 350,440 L 360,475 L 260,475 Z' }
    ]
  },

  // 2. TÀU VŨ TRỤ & PHI HÀNH GIA NHÍ (SPACE ROCKET & ASTRONAUT)
  {
    id: 'space-rocket-hero',
    titleVi: 'Tên Lửa Khám Phá Sao Hỏa',
    titleEn: 'Mars Explorer Rocket',
    category: 'space',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['tên lửa', 'vũ trụ', 'phi hành gia', 'space rocket', 'sao hỏa', 'bé trai'],
    regions: [
      // Deep Space Stars & Planet with Rings
      { id: 'planet-saturn', labelVi: 'Hành tinh vành đai', d: 'M 60,90 A 35,35 0 1,0 130,90 A 35,35 0 1,0 60,90 Z' },
      { id: 'saturn-ring', labelVi: 'Vành đai sao Thổ', d: 'M 40,90 C 40,65 150,65 150,90 C 150,115 40,115 40,90 Z' },
      { id: 'space-star-1', labelVi: 'Ngôi sao xa 1', d: 'M 420,70 L 425,85 L 440,90 L 425,95 L 420,110 L 415,95 L 400,90 L 415,85 Z' },
      { id: 'space-star-2', labelVi: 'Ngôi sao xa 2', d: 'M 80,260 L 84,272 L 96,276 L 84,280 L 80,292 L 76,280 L 64,276 L 76,272 Z' },

      // Rocket Nose Cone (Mũi tên lửa đỏ rực)
      { id: 'rocket-nose', labelVi: 'Mũi tên lửa xé gió', d: 'M 250,40 C 220,100 210,150 210,160 L 290,160 C 290,150 280,100 250,40 Z' },

      // Main Hull & Astronaut Window
      { id: 'rocket-hull-top', labelVi: 'Thân tàu vũ trụ trắng bạc', d: 'M 210,160 L 290,160 L 295,270 L 205,270 Z' },
      { id: 'rocket-window-outer', labelVi: 'Viền kính ngắm vũ trụ', d: 'M 220,210 A 30,30 0 1,0 280,210 A 30,30 0 1,0 220,210 Z' },
      { id: 'rocket-window-glass', labelVi: 'Kính phản chiếu sao', d: 'M 226,210 A 24,24 0 1,0 274,210 A 24,24 0 1,0 226,210 Z' },
      { id: 'astronaut-face', labelVi: 'Bé phi hành gia tươi cười', d: 'M 235,210 A 15,15 0 1,0 265,210 A 15,15 0 1,0 235,210 Z' },

      // Lower Hull & Fuel Tanks
      { id: 'rocket-hull-lower', labelVi: 'Khoang động cơ phản lực', d: 'M 205,270 L 295,270 L 305,340 L 195,340 Z' },
      { id: 'rocket-stripe', labelVi: 'Dải cờ tổ quốc thể thao', d: 'M 200,300 L 300,300 L 303,320 L 197,320 Z' },

      // Aerodynamic Stabilizer Fins
      { id: 'rocket-fin-l', labelVi: 'Cánh lái cân bằng trái', d: 'M 195,270 L 130,350 L 180,360 L 195,330 Z' },
      { id: 'rocket-fin-r', labelVi: 'Cánh lái cân bằng phải', d: 'M 305,270 L 370,350 L 320,360 L 305,330 Z' },

      // Engine Nozzles & Raging Fire Blast
      { id: 'engine-nozzle', labelVi: 'Miệng loa phản lực', d: 'M 215,340 L 285,340 L 295,370 L 205,370 Z' },
      { id: 'fire-blast-outer', labelVi: 'Ngọn lửa phóng đỏ cam', d: 'M 205,370 C 180,430 200,470 250,500 C 300,470 320,430 295,370 Z' },
      { id: 'fire-blast-inner', labelVi: 'Lõi lửa nhiệt độ cao vàng', d: 'M 225,370 C 215,410 230,450 250,480 C 270,450 285,410 275,370 Z' }
    ]
  },

  // 3. XE CỨU HỎA ANH HÙNG (HERO FIRE TRUCK)
  {
    id: 'car-fire-engine',
    titleVi: 'Xe Cứu Hỏa Cứu Nạn',
    titleEn: 'Hero Fire Truck',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['cứu hỏa', 'xe cứu hỏa', 'chữa cháy', 'fire truck', 'bé trai'],
    regions: [
      // Flashing Emergency Siren
      { id: 'siren-stand', labelVi: 'Đế đèn cứu hỏa', d: 'M 140,160 L 170,160 L 170,175 L 140,175 Z' },
      { id: 'siren-light', labelVi: 'Đèn chớp đỏ cứu hộ', d: 'M 142,145 C 142,135 168,135 168,145 L 168,160 L 142,160 Z' },

      // Big Rescue Ladder on Top
      { id: 'ladder-main-beam', labelVi: 'Thang cứu hộ vươn cao', d: 'M 190,145 L 430,135 L 430,165 L 190,175 Z' },
      { id: 'ladder-rungs', labelVi: 'Các bậc thang nhôm', d: 'M 220,150 L 225,170 M 260,148 L 265,168 M 300,146 L 305,166 M 340,144 L 345,164 M 380,142 L 385,162' },

      // Cabin Front
      { id: 'fire-cab-roof', labelVi: 'Nóc xe cứu hỏa đỏ tươi', d: 'M 100,175 L 210,175 L 210,230 L 70,230 L 70,205 Z' },
      { id: 'fire-windshield', labelVi: 'Kính lái cabin lớn', d: 'M 80,185 L 145,185 L 145,225 L 80,225 Z' },
      { id: 'fire-cab-door', labelVi: 'Cửa xe cứu hộ', d: 'M 155,185 L 205,185 L 205,280 L 155,280 Z' },

      // Main Truck Body & Equipment Compartments
      { id: 'fire-truck-body', labelVi: 'Thân xe cứu hỏa đỏ rực', d: 'M 210,175 L 440,175 L 440,320 L 70,320 L 70,230 L 210,230 Z' },
      { id: 'fire-stripe', labelVi: 'Dải phản quang vàng trắng', d: 'M 70,265 L 440,265 L 440,285 L 70,285 Z' },
      { id: 'hose-reel', labelVi: 'Cuộn vòi phun nước áp lực', d: 'M 350,200 A 25,25 0 1,0 400,200 A 25,25 0 1,0 350,200 Z' },

      // Heavy Duty Wheels
      { id: 'tire-f', labelVi: 'Lốp xe tải trước', d: 'M 100,325 A 45,45 0 1,0 190,325 A 45,45 0 1,0 100,325 Z' },
      { id: 'rim-f', labelVi: 'Mâm xe trước', d: 'M 125,325 A 20,20 0 1,0 165,325 A 20,20 0 1,0 125,325 Z' },
      { id: 'tire-r', labelVi: 'Lốp xe tải sau', d: 'M 310,325 A 45,45 0 1,0 400,325 A 45,45 0 1,0 310,325 Z' },
      { id: 'rim-r', labelVi: 'Mâm xe sau', d: 'M 335,325 A 20,20 0 1,0 375,325 A 20,20 0 1,0 335,325 Z' },

      // Road
      { id: 'road-surface', labelVi: 'Đường phố khẩn cấp', d: 'M 0,370 L 500,370 L 500,450 L 0,450 Z' }
    ]
  },

  // 4. XE CẢNH SÁT TUẦN TRA (POLICE PATROL CRUISER)
  {
    id: 'car-police-cruiser',
    titleVi: 'Xe Cảnh Sát Đặc Nhiệm',
    titleEn: 'Police Pursuit Cruiser',
    category: 'vehicles',
    difficulty: 'medium',
    viewBox: '0 0 500 500',
    tags: ['cảnh sát', 'xe cảnh sát', 'police', 'tuần tra', 'bé trai'],
    regions: [
      // Police Dual Flashing Lights (Xanh & Đỏ)
      { id: 'police-light-bar', labelVi: 'Thanh đèn còi hụ', d: 'M 210,145 L 290,145 L 290,160 L 210,160 Z' },
      { id: 'police-light-red', labelVi: 'Đèn chớp đỏ', d: 'M 215,148 L 245,148 L 245,157 L 215,157 Z' },
      { id: 'police-light-blue', labelVi: 'Đèn chớp xanh dương', d: 'M 255,148 L 285,148 L 285,157 L 255,157 Z' },

      // Cabin & Windows
      { id: 'police-cab-roof', labelVi: 'Nóc xe cảnh sát trắng', d: 'M 170,160 L 330,160 L 375,230 L 130,230 Z' },
      { id: 'police-windshield', labelVi: 'Kính chắn gió trước', d: 'M 145,225 L 180,170 L 240,170 L 240,225 Z' },
      { id: 'police-side-window', labelVi: 'Kính cửa sổ sau', d: 'M 250,170 L 320,170 L 360,225 L 250,225 Z' },

      // Main Black and White Body
      { id: 'police-body-front', labelVi: 'Đầu xe cảnh sát đen bóng', d: 'M 50,290 C 50,250 90,235 160,230 L 160,300 L 50,300 Z' },
      { id: 'police-body-center', labelVi: 'Cửa xe trắng đặc trưng', d: 'M 160,230 L 320,230 L 320,300 L 160,300 Z' },
      { id: 'police-body-rear', labelVi: 'Đuôi xe cảnh sát đen', d: 'M 320,230 C 380,235 440,250 440,290 L 440,300 L 320,300 Z' },

      // Police Star Badge & Text
      { id: 'police-star-badge', labelVi: 'Ngôi sao cảnh sát danh dự', d: 'M 240,245 L 243,255 L 254,255 L 245,262 L 248,272 L 240,266 L 232,272 L 235,262 L 226,255 L 237,255 Z' },
      { id: 'police-push-bumper', labelVi: 'Cản sắt húc trước', d: 'M 40,265 L 55,265 L 55,310 L 40,310 Z' },

      // Wheels
      { id: 'police-wheel-f', labelVi: 'Lốp xe tuần tra trước', d: 'M 95,305 A 42,42 0 1,0 179,305 A 42,42 0 1,0 95,305 Z' },
      { id: 'police-rim-f', labelVi: 'Mâm xe đen trước', d: 'M 116,305 A 21,21 0 1,0 158,305 A 21,21 0 1,0 116,305 Z' },
      { id: 'police-wheel-r', labelVi: 'Lốp xe tuần tra sau', d: 'M 315,305 A 42,42 0 1,0 399,305 A 42,42 0 1,0 315,305 Z' },
      { id: 'police-rim-r', labelVi: 'Mâm xe đen sau', d: 'M 336,305 A 21,21 0 1,0 378,305 A 21,21 0 1,0 336,305 Z' },

      // Highway
      { id: 'highway-road', labelVi: 'Đại lộ tuần tra', d: 'M 0,350 L 500,350 L 500,430 L 0,430 Z' }
    ]
  }
];

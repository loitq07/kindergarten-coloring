import { ColoringTemplate } from '../../types';
import { CURATED_TEMPLATES } from './curated';
import { BOY_DINOSAURS_TEMPLATES } from './boyDinosaurs';
import { BOY_VEHICLES_TEMPLATES } from './boyVehicles';
import { BOY_ACTION_TEMPLATES } from './boyAction';
import { FREE_DRAW_TEMPLATE } from './freeDraw';

export const ALL_TEMPLATES: ColoringTemplate[] = [
  // 1. Tuyển tập tranh vẽ hoạt hình & khủng long chi tiết chuẩn sách tô màu
  ...CURATED_TEMPLATES,
  // 2. Siêu xe, xe quái vật, máy xúc công trình, máy bay phản lực
  ...BOY_VEHICLES_TEMPLATES,
  // 3. Robot chiến binh, tàu vũ trụ, xe cứu hỏa, xe cảnh sát
  ...BOY_ACTION_TEMPLATES,
  // 4. Khủng long tiền sử
  ...BOY_DINOSAURS_TEMPLATES,
  // 5. Bảng vẽ tự do sáng tạo
  FREE_DRAW_TEMPLATE
];

export function getTemplateById(id: string): ColoringTemplate {
  const found = ALL_TEMPLATES.find(t => t.id === id);
  return found || ALL_TEMPLATES[0];
}

export function getTemplatesByCategory(category: string): ColoringTemplate[] {
  if (category === 'all') return ALL_TEMPLATES;
  return ALL_TEMPLATES.filter(t => t.category === category);
}

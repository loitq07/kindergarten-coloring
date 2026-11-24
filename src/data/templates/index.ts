import { ColoringTemplate } from '../../types';
import { CURATED_TEMPLATES } from './curated';
import { FREE_DRAW_TEMPLATE } from './freeDraw';

export const ALL_TEMPLATES: ColoringTemplate[] = [
  ...CURATED_TEMPLATES,
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

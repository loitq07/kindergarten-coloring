import { ColoringTemplate } from '../../types';
import { DINOSAURS_TEMPLATES } from './dinosaurs';
import { VEHICLES_TEMPLATES } from './vehicles';
import { ROBOTS_TEMPLATES } from './robots';
import { OCEAN_TEMPLATES } from './ocean';
import { ANIMALS_TEMPLATES } from './animals';
import { FAIRYTALE_TEMPLATES } from './fairytale';
import { NATURE_TEMPLATES } from './nature';
import { FRUITS_TEMPLATES } from './fruits';
import { FREE_DRAW_TEMPLATE } from './freeDraw';

export const ALL_TEMPLATES: ColoringTemplate[] = [
  ...DINOSAURS_TEMPLATES,
  ...VEHICLES_TEMPLATES,
  ...ROBOTS_TEMPLATES,
  ...OCEAN_TEMPLATES,
  ...ANIMALS_TEMPLATES,
  ...FAIRYTALE_TEMPLATES,
  ...NATURE_TEMPLATES,
  ...FRUITS_TEMPLATES,
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

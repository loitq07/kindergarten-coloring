import { SavedArtwork } from '../types';

const STORAGE_KEY_GALLERY = 'kindergarten_coloring_artworks_v1';
const STORAGE_KEY_AUTOSAVE_PREFIX = 'kindergarten_coloring_autosave_';

export function getSavedArtworks(): SavedArtwork[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_GALLERY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load saved artworks:', e);
    return [];
  }
}

export function saveArtwork(artwork: SavedArtwork): void {
  try {
    const list = getSavedArtworks();
    const existingIndex = list.findIndex(item => item.id === artwork.id);
    if (existingIndex >= 0) {
      list[existingIndex] = artwork;
    } else {
      list.unshift(artwork);
    }
    // Limit to 30 saved artworks to prevent exceeding localStorage quota
    if (list.length > 30) {
      list.pop();
    }
    localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save artwork to gallery:', e);
  }
}

export function deleteSavedArtwork(id: string): void {
  try {
    const list = getSavedArtworks().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY_GALLERY, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to delete artwork:', e);
  }
}

export function saveAutosave(templateId: string, filledRegions: Record<string, string>, canvasDataUrl?: string): void {
  try {
    const payload = {
      templateId,
      filledRegions,
      canvasDataUrl,
      updatedAt: Date.now()
    };
    localStorage.setItem(`${STORAGE_KEY_AUTOSAVE_PREFIX}${templateId}`, JSON.stringify(payload));
  } catch (e) {
    // Quota might be exceeded if canvasDataUrl is large; fail gracefully
  }
}

export function loadAutosave(templateId: string): { filledRegions: Record<string, string>; canvasDataUrl?: string } | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_AUTOSAVE_PREFIX}${templateId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearAutosave(templateId: string): void {
  try {
    localStorage.removeItem(`${STORAGE_KEY_AUTOSAVE_PREFIX}${templateId}`);
  } catch {}
}

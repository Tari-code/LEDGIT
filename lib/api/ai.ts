import { api } from './client';
import type { OcrResult } from '../../types/api.types';

export const aiApi = {
  ocr: (documentUrl: string) =>
    api.post<OcrResult>('/ai/ocr', { documentUrl }),
};

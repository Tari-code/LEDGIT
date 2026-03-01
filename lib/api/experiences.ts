import { api } from './client';
import type {
  CreateExperienceDto,
  CreateExperienceResponse,
  Experience,
  UserMeResponse,
} from '../../types/api.types';

export const experiencesApi = {
  getMe: () => api.get<UserMeResponse>('/user/me'),

  list: () => api.get<Experience[]>('/experiences'),

  get: (id: string) => api.get<Experience>(`/experiences/${id}`),

  create: (dto: CreateExperienceDto) =>
    api.post<CreateExperienceResponse>('/experiences', dto),
};

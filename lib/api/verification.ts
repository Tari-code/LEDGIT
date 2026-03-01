import { api } from './client';
import type { VerificationResponse } from '../../types/api.types';

export const verificationApi = {
  verify: (experienceId: string) =>
    api.get<VerificationResponse>(`/verification/${experienceId}`),
};

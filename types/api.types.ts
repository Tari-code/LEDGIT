// ─── Auth ──────────────────────────────────────────────────────────────────
export interface RequestMagicLinkDto {
  email: string;
}

export interface VerifyMagicLinkDto {
  token: string;
}

export interface AuthVerifyResponse {
  accessToken: string;
}

// ─── User ──────────────────────────────────────────────────────────────────
export interface ExperienceSummary {
  id: string;
  role: string;
  institution: string;
  status: ExperienceStatus;
  startDate: string;
  endDate?: string | null;
  createdAt: string;
}

export interface UserMeResponse {
  email: string;
  createdAt: string;
  experiences: ExperienceSummary[];
}

// ─── Experience ────────────────────────────────────────────────────────────
export type ExperienceStatus = 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface AuditLog {
  id: string;
  experienceId: string;
  action: 'SUBMITTED' | 'VERIFIED' | 'REJECTED';
  payloadHash: string;
  createdAt: string;
}

export interface Experience {
  id: string;
  userId: string;
  role: string;
  institution: string;
  startDate: string;
  endDate?: string | null;
  documentUrl?: string | null;
  issuerEmail: string;
  status: ExperienceStatus;
  issuerComment?: string | null;
  submissionHash: string;
  verificationHash?: string | null;
  hederaTxId?: string | null;
  hederaTimestamp?: string | null;
  createdAt: string;
  updatedAt: string;
  auditLogs?: AuditLog[];
}

export interface CreateExperienceDto {
  role: string;
  institution: string;
  startDate: string;
  endDate?: string;
  issuerEmail: string;
  documentUrl?: string;
}

export interface CreateExperienceResponse {
  experienceId: string;
  status: ExperienceStatus;
}

// ─── Verification (Public) ────────────────────────────────────────────────
export interface VerificationResponse {
  status: ExperienceStatus;
  role?: string;
  institution?: string;
  startDate?: string;
  endDate?: string | null;
  issuerEmail?: string;
  hederaTxId?: string | null;
  hederaTimestamp?: string | null;
  message?: string;
}

// ─── AI / OCR ─────────────────────────────────────────────────────────────
export interface OcrSuggestions {
  role?: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
}

export interface OcrResult {
  suggestions: OcrSuggestions;
  warnings: string[];
}

// ─── API Error ────────────────────────────────────────────────────────────
export interface ApiError {
  statusCode: number;
  message: string | string[];
  timestamp: string;
  path: string;
}

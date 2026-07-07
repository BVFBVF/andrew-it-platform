import { GRADE, FORMAT, READINESS_STATUS } from "./dictionaries";

export type Grade = (typeof GRADE)[keyof typeof GRADE];
export type Format = (typeof FORMAT)[keyof typeof FORMAT];
export type ReadinessStatus = (typeof READINESS_STATUS)[keyof typeof READINESS_STATUS];

export type Candidate = {
  id: string;
  name: string;
  role: string;
  grade: Grade;
  format: Format;
  rate: number; // USD/hour or whatever
  skills: string[];
  readinessScore: number; // 0 to 100
  readinessStatus: ReadinessStatus;
  avatarUrl?: string;
  about?: string;
};
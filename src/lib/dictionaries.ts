export const READINESS_STATUS = {
  READY: "Ready",
  IN_2_WEEKS: "In 2 weeks",
  BUSY: "Busy",
  LOOKING_FOR_OFFERS: "Looking for offers",
} as const;

export const GRADE = {
  ANY: "Any",
  JUNIOR: "Junior",
  MIDDLE: "Middle",
  SENIOR: "Senior",
  LEAD: "Lead",
} as const;

export const grades = Object.values(GRADE);

export const FORMAT = {
  ANY: "Any",
  REMOTE: "Remote",
  OFFICE: "Office",
  HYBRID: "Hybrid",
} as const;

export const PIPELINE_STAGE = {
  NEW: "Новый",
  TEST_ASSIGNED: "Задание выдано",
  TEST_SUBMITTED: "Задание сдано",
  PREP_INTERVIEW: "Готовится к собесу",
  PITCHING: "Питчится клиентам",
  INTERVIEW: "На собесе",
  HIRED: "Трудоустроен",
  REJECTED: "Отвалился",
} as const;

export const pipelineStages = Object.values(PIPELINE_STAGE)
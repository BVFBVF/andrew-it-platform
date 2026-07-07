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

export const FORMAT = {
  ANY: "Any",
  REMOTE: "Remote",
  OFFICE: "Office",
  HYBRID: "Hybrid",
} as const;

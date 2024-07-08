import { Agency as TAgency } from "../api/agency/Agency";

export const AGENCY_TITLE_FIELD = "name";

export const AgencyTitle = (record: TAgency): string => {
  return record.name?.toString() || String(record.id);
};

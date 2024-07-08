import { Line as TLine } from "../api/line/Line";

export const LINE_TITLE_FIELD = "fromLocation";

export const LineTitle = (record: TLine): string => {
  return record.fromLocation?.toString() || String(record.id);
};

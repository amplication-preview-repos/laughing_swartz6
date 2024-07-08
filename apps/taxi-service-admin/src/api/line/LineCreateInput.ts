import { InputJsonValue } from "../../types";

export type LineCreateInput = {
  fromLocation?: string | null;
  toLocation?: string | null;
  rides?: InputJsonValue;
};

import { InputJsonValue } from "../../types";

export type LineUpdateInput = {
  fromLocation?: string | null;
  toLocation?: string | null;
  rides?: InputJsonValue;
};

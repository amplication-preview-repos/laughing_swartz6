import { JsonValue } from "type-fest";

export type Line = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fromLocation: string | null;
  toLocation: string | null;
  rides: JsonValue;
};

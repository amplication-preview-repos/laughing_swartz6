import { AgencyWhereUniqueInput } from "../agency/AgencyWhereUniqueInput";

export type OrderCreateInput = {
  time?: Date | null;
  active?: boolean | null;
  uid?: string | null;
  driver?: string | null;
  ride?: string | null;
  agency?: AgencyWhereUniqueInput | null;
};

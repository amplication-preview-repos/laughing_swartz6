import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgencyWhereUniqueInput } from "../agency/AgencyWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  time?: DateTimeNullableFilter;
  active?: BooleanNullableFilter;
  uid?: StringNullableFilter;
  driver?: StringNullableFilter;
  ride?: StringNullableFilter;
  agency?: AgencyWhereUniqueInput;
};

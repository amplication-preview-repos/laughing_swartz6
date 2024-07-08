import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type AgencyWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
  drivers?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};

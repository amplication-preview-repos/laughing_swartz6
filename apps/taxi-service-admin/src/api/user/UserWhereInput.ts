import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  displayName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: StringNullableFilter;
  lastLocation?: StringNullableFilter;
  ordersHistory?: StringNullableFilter;
  photoUrl?: StringNullableFilter;
  userRole?: "Option1";
  roleType?: "Option1";
  latestLocation?: StringNullableFilter;
};

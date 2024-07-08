import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  displayName?: SortOrder;
  phoneNumber?: SortOrder;
  role?: SortOrder;
  lastLocation?: SortOrder;
  ordersHistory?: SortOrder;
  photoUrl?: SortOrder;
  userRole?: SortOrder;
  roleType?: SortOrder;
  latestLocation?: SortOrder;
};

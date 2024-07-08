import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  time?: SortOrder;
  active?: SortOrder;
  uid?: SortOrder;
  driver?: SortOrder;
  ride?: SortOrder;
  agencyId?: SortOrder;
};

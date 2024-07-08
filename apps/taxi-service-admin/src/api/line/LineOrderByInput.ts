import { SortOrder } from "../../util/SortOrder";

export type LineOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fromLocation?: SortOrder;
  toLocation?: SortOrder;
  rides?: SortOrder;
};

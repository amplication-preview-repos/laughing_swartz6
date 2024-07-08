import { SortOrder } from "../../util/SortOrder";

export type AgencyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  drivers?: SortOrder;
};

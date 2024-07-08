import { OrderUpdateManyWithoutAgenciesInput } from "./OrderUpdateManyWithoutAgenciesInput";

export type AgencyUpdateInput = {
  password?: string | null;
  name?: string | null;
  numberField?: number | null;
  drivers?: string | null;
  orders?: OrderUpdateManyWithoutAgenciesInput;
};

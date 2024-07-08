import { OrderCreateNestedManyWithoutAgenciesInput } from "./OrderCreateNestedManyWithoutAgenciesInput";

export type AgencyCreateInput = {
  password?: string | null;
  name?: string | null;
  numberField?: number | null;
  drivers?: string | null;
  orders?: OrderCreateNestedManyWithoutAgenciesInput;
};

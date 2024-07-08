import { AgencyWhereInput } from "./AgencyWhereInput";
import { AgencyOrderByInput } from "./AgencyOrderByInput";

export type AgencyFindManyArgs = {
  where?: AgencyWhereInput;
  orderBy?: Array<AgencyOrderByInput>;
  skip?: number;
  take?: number;
};

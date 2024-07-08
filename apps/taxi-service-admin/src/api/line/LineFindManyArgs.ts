import { LineWhereInput } from "./LineWhereInput";
import { LineOrderByInput } from "./LineOrderByInput";

export type LineFindManyArgs = {
  where?: LineWhereInput;
  orderBy?: Array<LineOrderByInput>;
  skip?: number;
  take?: number;
};

import { LineWhereInput } from "./LineWhereInput";

export type LineListRelationFilter = {
  every?: LineWhereInput;
  some?: LineWhereInput;
  none?: LineWhereInput;
};

import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "uid";

export const OrderTitle = (record: TOrder): string => {
  return record.uid?.toString() || String(record.id);
};

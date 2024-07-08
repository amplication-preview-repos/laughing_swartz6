import { Order } from "../order/Order";

export type Agency = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  name: string | null;
  numberField: number | null;
  drivers: string | null;
  orders?: Array<Order>;
};

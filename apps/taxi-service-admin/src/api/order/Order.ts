import { Agency } from "../agency/Agency";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  time: Date | null;
  active: boolean | null;
  uid: string | null;
  driver: string | null;
  ride: string | null;
  agency?: Agency | null;
};

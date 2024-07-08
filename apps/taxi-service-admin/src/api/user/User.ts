import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  displayName: string | null;
  phoneNumber: string | null;
  role: string | null;
  lastLocation: string | null;
  ordersHistory: string | null;
  photoUrl: string | null;
  userRole?: "Option1" | null;
  roleType?: "Option1" | null;
  latestLocation: string | null;
};

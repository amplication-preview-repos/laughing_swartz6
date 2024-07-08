import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  displayName?: string | null;
  phoneNumber?: string | null;
  role?: string | null;
  lastLocation?: string | null;
  ordersHistory?: string | null;
  photoUrl?: string | null;
  userRole?: "Option1" | null;
  roleType?: "Option1" | null;
  latestLocation?: string | null;
};

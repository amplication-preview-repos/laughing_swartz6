import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="display_name" source="displayName" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="role" source="role" />
        <TextField label="last_location" source="lastLocation" />
        <TextField label="orders_history" source="ordersHistory" />
        <TextField label="photo_url" source="photoUrl" />
        <TextField label="userRole" source="userRole" />
        <TextField label="roleType" source="roleType" />
        <TextField label="latestLocation" source="latestLocation" />
      </SimpleShowLayout>
    </Show>
  );
};

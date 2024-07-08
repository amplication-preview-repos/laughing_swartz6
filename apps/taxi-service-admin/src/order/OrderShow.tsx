import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { AGENCY_TITLE_FIELD } from "../agency/AgencyTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="time" source="time" />
        <BooleanField label="active" source="active" />
        <TextField label="uid" source="uid" />
        <TextField label="driver" source="driver" />
        <TextField label="ride" source="ride" />
        <ReferenceField label="agency" source="agency.id" reference="Agency">
          <TextField source={AGENCY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

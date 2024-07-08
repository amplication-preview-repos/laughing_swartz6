import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { AGENCY_TITLE_FIELD } from "./AgencyTitle";

export const AgencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="password" source="password" />
        <TextField label="name" source="name" />
        <TextField label="number" source="numberField" />
        <TextField label="drivers" source="drivers" />
        <ReferenceManyField reference="Order" target="agencyId" label="Orders">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="time" source="time" />
            <BooleanField label="active" source="active" />
            <TextField label="uid" source="uid" />
            <TextField label="driver" source="driver" />
            <TextField label="ride" source="ride" />
            <ReferenceField
              label="agency"
              source="agency.id"
              reference="Agency"
            >
              <TextField source={AGENCY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

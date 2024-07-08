import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AgencyTitle } from "../agency/AgencyTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="time" source="time" />
        <BooleanInput label="active" source="active" />
        <TextInput label="uid" source="uid" />
        <TextInput label="driver" source="driver" />
        <TextInput label="ride" source="ride" />
        <ReferenceInput source="agency.id" reference="Agency" label="agency">
          <SelectInput optionText={AgencyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

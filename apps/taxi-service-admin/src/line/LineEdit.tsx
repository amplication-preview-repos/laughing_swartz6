import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fromLocation" source="fromLocation" />
        <TextInput label="toLocation" source="toLocation" />
        <div />
      </SimpleForm>
    </Edit>
  );
};

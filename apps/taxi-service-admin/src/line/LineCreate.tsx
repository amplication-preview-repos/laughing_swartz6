import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fromLocation" source="fromLocation" />
        <TextInput label="toLocation" source="toLocation" />
        <div />
      </SimpleForm>
    </Create>
  );
};

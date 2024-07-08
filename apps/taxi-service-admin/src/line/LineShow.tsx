import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fromLocation" source="fromLocation" />
        <TextField label="toLocation" source="toLocation" />
        <TextField label="rides" source="rides" />
      </SimpleShowLayout>
    </Show>
  );
};

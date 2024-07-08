import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AGENCY_TITLE_FIELD } from "../agency/AgencyTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

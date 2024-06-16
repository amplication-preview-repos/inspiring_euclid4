import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PayslipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payslips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Employee" source="employee" />
        <TextField label="ID" source="id" />
        <TextField label="payDate" source="payDate" />
        <TextField label="pdfDocument" source="pdfDocument" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

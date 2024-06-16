import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PayslipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Employee" source="employee" />
        <DateTimeInput label="payDate" source="payDate" />
        <div />
      </SimpleForm>
    </Create>
  );
};

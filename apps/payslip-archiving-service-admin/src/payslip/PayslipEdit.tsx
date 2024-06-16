import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PayslipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Employee" source="employee" />
        <DateTimeInput label="payDate" source="payDate" />
        <div />
      </SimpleForm>
    </Edit>
  );
};

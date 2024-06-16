import { JsonValue } from "type-fest";

export type Payslip = {
  createdAt: Date;
  employee: string | null;
  id: string;
  payDate: Date | null;
  pdfDocument: JsonValue;
  updatedAt: Date;
};

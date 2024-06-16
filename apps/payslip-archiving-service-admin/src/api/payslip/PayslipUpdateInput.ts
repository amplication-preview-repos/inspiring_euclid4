import { InputJsonValue } from "../../types";

export type PayslipUpdateInput = {
  employee?: string | null;
  payDate?: Date | null;
  pdfDocument?: InputJsonValue;
};

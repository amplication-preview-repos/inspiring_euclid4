import { InputJsonValue } from "../../types";

export type PayslipCreateInput = {
  employee?: string | null;
  payDate?: Date | null;
  pdfDocument?: InputJsonValue;
};

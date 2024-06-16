import { SortOrder } from "../../util/SortOrder";

export type PayslipOrderByInput = {
  createdAt?: SortOrder;
  employee?: SortOrder;
  id?: SortOrder;
  payDate?: SortOrder;
  pdfDocument?: SortOrder;
  updatedAt?: SortOrder;
};

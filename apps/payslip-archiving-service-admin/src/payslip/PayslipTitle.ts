import { Payslip as TPayslip } from "../api/payslip/Payslip";

export const PAYSLIP_TITLE_FIELD = "employee";

export const PayslipTitle = (record: TPayslip): string => {
  return record.employee?.toString() || String(record.id);
};

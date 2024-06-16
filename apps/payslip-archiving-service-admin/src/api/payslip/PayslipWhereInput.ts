import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PayslipWhereInput = {
  employee?: StringNullableFilter;
  id?: StringFilter;
  payDate?: DateTimeNullableFilter;
  pdfDocument?: JsonFilter;
};

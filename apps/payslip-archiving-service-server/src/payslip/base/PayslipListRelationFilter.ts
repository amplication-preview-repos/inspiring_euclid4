/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PayslipWhereInput } from "./PayslipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PayslipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PayslipWhereInput,
  })
  @ValidateNested()
  @Type(() => PayslipWhereInput)
  @IsOptional()
  @Field(() => PayslipWhereInput, {
    nullable: true,
  })
  every?: PayslipWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayslipWhereInput,
  })
  @ValidateNested()
  @Type(() => PayslipWhereInput)
  @IsOptional()
  @Field(() => PayslipWhereInput, {
    nullable: true,
  })
  some?: PayslipWhereInput;

  @ApiProperty({
    required: false,
    type: () => PayslipWhereInput,
  })
  @ValidateNested()
  @Type(() => PayslipWhereInput)
  @IsOptional()
  @Field(() => PayslipWhereInput, {
    nullable: true,
  })
  none?: PayslipWhereInput;
}
export { PayslipListRelationFilter as PayslipListRelationFilter };
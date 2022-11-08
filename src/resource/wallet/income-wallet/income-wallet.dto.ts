import { PartialType } from '@nestjs/mapped-types';

export class CreateIncomeWalletDto {
    title: string
    value: number
}
export class UpdateIncomeWalletDto extends PartialType(CreateIncomeWalletDto) {
    title: string
    value: number
}
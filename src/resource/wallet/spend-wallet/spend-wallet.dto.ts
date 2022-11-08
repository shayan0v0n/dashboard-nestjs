import { PartialType } from '@nestjs/mapped-types';

export class CreateSpendWalletDto {
    title: string
    value: number
}

export class UpdateSpendWalletDto extends PartialType(CreateSpendWalletDto) {
    title: string
    value: number
}

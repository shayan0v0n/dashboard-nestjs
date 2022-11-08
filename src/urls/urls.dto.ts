import { PartialType } from '@nestjs/mapped-types';

export class CreateUrlDto {
    name: string
    address: string
}

export class UpdateUrlDto extends PartialType(CreateUrlDto) {
    name: string
    address: string
}

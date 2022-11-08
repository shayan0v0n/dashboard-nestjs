import { PartialType } from '@nestjs/mapped-types';

export class CreatePasswordDto {
    title: string
    password: string
}

export class UpdatePasswordDto extends PartialType(CreatePasswordDto) {
    title: string
    password: string
}

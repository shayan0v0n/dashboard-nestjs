import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
    email:string
    password:string
}
export class UpdateUserDto extends PartialType(CreateUserDto) {
    email:string
    password:string
}
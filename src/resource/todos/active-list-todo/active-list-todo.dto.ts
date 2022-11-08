import { PartialType } from '@nestjs/mapped-types';

export class CreateActiveListTodoDto {
    title: string;
}

export class UpdateActiveListTodoDto extends PartialType(CreateActiveListTodoDto) {
    title: string;
}
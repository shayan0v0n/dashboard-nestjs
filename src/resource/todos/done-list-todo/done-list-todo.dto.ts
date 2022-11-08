import { PartialType } from '@nestjs/mapped-types';

export class CreateDoneListTodoDto {
    title: string
}

export class UpdateDoneListTodoDto extends PartialType(CreateDoneListTodoDto) {
    title: string
}

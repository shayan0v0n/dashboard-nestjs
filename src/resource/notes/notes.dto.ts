import { PartialType } from '@nestjs/mapped-types';

export class CreateNoteDto {
    title: string
    shortDesc: string
    text: string
}
export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    title: string
    shortDesc: string
    text: string
}

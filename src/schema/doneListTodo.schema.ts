import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DoneListTodoDocument = DoneListTodo & Document;

@Schema({timestamps: true})
export class DoneListTodo {
    @Prop({ default: null, required: true })
    title: string
}

export const doneListTodoSchema = SchemaFactory.createForClass(DoneListTodo)
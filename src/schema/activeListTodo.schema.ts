import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ActiveListTodoDocument = ActiveListTodo & Document;

@Schema({timestamps: true})
export class ActiveListTodo {
    @Prop({ default: null, required: true })
    title: string
}

export const activeListTodoSchema = SchemaFactory.createForClass(ActiveListTodo)
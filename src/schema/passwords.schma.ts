import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type passwordDocument = Password & Document

@Schema({ timestamps: true })
export class Password {
    @Prop({ default: null, required: true })
    title: string
    @Prop({ default: null, required: true })
    password: string
}

export const passwordSchema = SchemaFactory.createForClass(Password)
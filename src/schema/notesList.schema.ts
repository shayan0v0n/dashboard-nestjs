import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type noteListDocument = Document & NoteList

@Schema({ timestamps: true })
export class NoteList {
    @Prop({ default: null, required: true })
    title: string
    @Prop({ default: null, required: true })
    shortDesc: string
    @Prop({ default: null, required: true })
    text: string
}

export const noteListSchema = SchemaFactory.createForClass(NoteList)
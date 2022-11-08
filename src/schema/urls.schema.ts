import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UrlsDocument = Urls & Document

@Schema({timestamps: true})
export class Urls {
    @Prop({ default: null, required: true })
    name: string
    @Prop({ default: null, required: true })
    address: string
}

export const urlSchema = SchemaFactory.createForClass(Urls)
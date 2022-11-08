import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type spendDocument = SpendWallet & Document

@Schema({ timestamps: true })
export class SpendWallet {
    @Prop({ default: null, required: true })
    title: string
    @Prop({ default: null, required: true })
    value: number
}

export const spendWalletSchema = SchemaFactory.createForClass(SpendWallet)
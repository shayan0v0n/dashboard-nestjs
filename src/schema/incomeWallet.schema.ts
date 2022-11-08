import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type incomeDocument = IncomeWallet & Document

@Schema({ timestamps: true })
export class IncomeWallet {
    @Prop({ default: null, required: true })
    title: string
    @Prop({ default: null, required: true })
    value: number
}

export const incomeWalletSchema = SchemaFactory.createForClass(IncomeWallet)
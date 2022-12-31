import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { NoteList } from "./notesList.schema";
import { Urls } from "./urls.schema";
import { Password } from "./passwords.schma";
import { ActiveListTodo } from "./activeListTodo.schema";
import { DoneListTodo } from "./doneListTodo.schema";
import { IncomeWallet } from "./incomeWallet.schema";
import { SpendWallet } from "./spendWallet.schema";

export type UserDocument = Users & Document

@Schema({ timestamps: true })
export class Users {
    @Prop({ default: null, required: true })
    email:string

    @Prop({ default: null, required: true })
    password:string
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: NoteList.name }])
    noteList: [NoteList];

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Urls.name }])
    urls: [Users]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Password.name }])
    passwords: [Password]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: ActiveListTodo.name }])
    activeList: [ActiveListTodo]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: DoneListTodo.name }])
    doneList: [DoneListTodo]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: IncomeWallet.name }])
    incomeWallet: [IncomeWallet]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: SpendWallet.name }])
    spendWallet: [SpendWallet]
}

const userSchema = SchemaFactory.createForClass(Users)

export default userSchema
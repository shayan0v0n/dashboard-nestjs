import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { incomeDocument, IncomeWallet } from 'src/schema/incomeWallet.schema';
import { spendDocument, SpendWallet } from 'src/schema/spendWallet.schema';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(SpendWallet.name)
    private spendWallet: Model<spendDocument>,
    @InjectModel(IncomeWallet.name)
    private incomeWallet: Model<incomeDocument>
  ){}


  async findAll() {
    const spendWallet = await this.spendWallet.find({})
    const incomeWallet = await this.incomeWallet.find({})
    const mergedList = spendWallet.concat(incomeWallet)
    
    return mergedList
  }

  async findOne(id: string) {
    const spendWallet = await this.spendWallet.findById(id)
    const incomeWallet = await this.incomeWallet.findById(id)
    if (spendWallet !== null) return spendWallet
    else if(incomeWallet !== null) return incomeWallet
    return {}
  }
}

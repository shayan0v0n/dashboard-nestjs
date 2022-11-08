import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { incomeDocument, IncomeWallet } from 'src/schema/incomeWallet.schema';
import { Password, passwordDocument } from 'src/schema/passwords.schma';
import { CreateIncomeWalletDto, UpdateIncomeWalletDto } from './income-wallet.dto';

@Injectable()
export class IncomeWalletService {
  constructor(
    @InjectModel(IncomeWallet.name)
    private incomeWallet: Model<incomeDocument>
  ){}

  create(createIncomeWalletDto: CreateIncomeWalletDto) {
    const selectClass = this.incomeWallet
    const incomeWallet = new selectClass(createIncomeWalletDto)
    incomeWallet.save()
    return incomeWallet
  }

  async findAll() {
    const incomeWallet = await this.incomeWallet.find({})
    return incomeWallet
  }

  async findOne(id: string) {
    const incomeWallet = await this.incomeWallet.findById(id)
    return incomeWallet
  }

  async update(id: string, updateIncomeWalletDto: CreateIncomeWalletDto) {
    const updatedIncomeWallet = await this.incomeWallet.findByIdAndUpdate(id, updateIncomeWalletDto)
    return updatedIncomeWallet
  }
  
  async remove(id: string) {
    const deletedIncomeWallet = await this.incomeWallet.findByIdAndDelete(id)
    return deletedIncomeWallet
  }
}

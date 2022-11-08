import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { spendDocument, SpendWallet } from 'src/schema/spendWallet.schema';
import { CreateSpendWalletDto, UpdateSpendWalletDto } from './spend-wallet.dto';

@Injectable()
export class SpendWalletService {
  constructor(
    @InjectModel(SpendWallet.name)
    private spendWallet: Model<spendDocument>
  ){}

  create(createSpendWalletDto: CreateSpendWalletDto) {
    const selectClass = this.spendWallet
    const spendWallet = new selectClass(createSpendWalletDto)
    spendWallet.save()
    return spendWallet
  }

  async findAll() {
    const spendWallet = await this.spendWallet.find({})
    return spendWallet
  }

  async findOne(id: string) {
    const spendWallet = await this.spendWallet.findById(id)
    return spendWallet
  }

  async update(id: string, updateSpendWalletDto: UpdateSpendWalletDto) {
    const updatedSpendWallet = await this.spendWallet.findByIdAndUpdate(id, updateSpendWalletDto)
    return updatedSpendWallet
  }
  
  async remove(id: string) {
    const deletedSpendWallet = await this.spendWallet.findByIdAndDelete(id)
    return deletedSpendWallet
  }
}

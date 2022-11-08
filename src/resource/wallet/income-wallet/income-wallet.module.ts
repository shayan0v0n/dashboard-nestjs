import { Module } from '@nestjs/common';
import { IncomeWalletService } from './income-wallet.service';
import { IncomeWalletController } from './income-wallet.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { IncomeWallet, incomeWalletSchema } from 'src/schema/incomeWallet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IncomeWallet.name, schema: incomeWalletSchema }])
  ],
  controllers: [IncomeWalletController],
  providers: [IncomeWalletService]
})
export class IncomeWalletModule {}

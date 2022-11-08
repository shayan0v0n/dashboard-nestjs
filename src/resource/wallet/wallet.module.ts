import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { IncomeWalletModule } from './income-wallet/income-wallet.module';
import { SpendWalletModule } from './spend-wallet/spend-wallet.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeWallet, incomeWalletSchema } from 'src/schema/incomeWallet.schema';
import { SpendWallet, spendWalletSchema } from 'src/schema/spendWallet.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: IncomeWallet.name, schema: incomeWalletSchema }]),
    MongooseModule.forFeature([{ name: SpendWallet.name, schema: spendWalletSchema }]),
    IncomeWalletModule,
    SpendWalletModule
  ],
  controllers: [WalletController],
  providers: [WalletService]
})
export class WalletModule {}

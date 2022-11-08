import { Module } from '@nestjs/common';
import { SpendWalletService } from './spend-wallet.service';
import { SpendWalletController } from './spend-wallet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpendWallet, spendWalletSchema } from 'src/schema/spendWallet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SpendWallet.name, schema: spendWalletSchema }])
  ],
  controllers: [SpendWalletController],
  providers: [SpendWalletService]
})
export class SpendWalletModule {}

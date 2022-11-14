import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './resource/todos/todos.module';
import { UrlsModule } from './resource/urls/urls.module';
import { PasswordsModule } from './resource/passwords/passwords.module';
import { WalletModule } from './resource/wallet/wallet.module';
import { IncomeWalletModule } from './resource/wallet/income-wallet/income-wallet.module';
import { SpendWalletModule } from './resource/wallet/spend-wallet/spend-wallet.module';
import { NotesModule } from './resource/notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dashboard'),
    TodosModule,
    UrlsModule,
    PasswordsModule,
    WalletModule,
    IncomeWalletModule,
    SpendWalletModule,
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

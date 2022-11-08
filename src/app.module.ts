import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UrlsModule } from './urls/urls.module';
import { PasswordsModule } from './passwords/passwords.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dashboard'),
    TodosModule,
    UrlsModule,
    PasswordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

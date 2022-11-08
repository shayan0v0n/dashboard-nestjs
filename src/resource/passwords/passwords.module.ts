import { Module } from '@nestjs/common';
import { PasswordsService } from './passwords.service';
import { PasswordsController } from './passwords.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Password, passwordSchema } from 'src/schema/passwords.schma';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Password.name, schema: passwordSchema }])
  ],
  controllers: [PasswordsController],
  providers: [PasswordsService]
})
export class PasswordsModule {}

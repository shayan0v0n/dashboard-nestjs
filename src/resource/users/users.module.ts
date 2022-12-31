import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import userSchema, { Users } from 'src/schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:Users.name, schema: userSchema }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

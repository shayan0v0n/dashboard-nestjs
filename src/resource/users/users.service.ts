import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, Users } from 'src/schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name)
  private users: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto) {
    const selectedClass = this.users
    const createdUser = new selectedClass(createUserDto)
    createdUser.save()
  }

  async findAll() {
    const users = await this.users.find({})
    return users
  }

  async findOne(id: string) {
    const user = await this.users.findById(id)
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.users.findByIdAndUpdate(id, updateUserDto);
    return updatedUser
  }

  async remove(id: string) {
    const deletedUser = await this.users.findByIdAndRemove(id)
  }
}

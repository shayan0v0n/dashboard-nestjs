import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Password, passwordDocument } from 'src/schema/passwords.schma';
import { CreateUrlDto } from 'src/urls/urls.dto';
import { CreatePasswordDto, UpdatePasswordDto } from './passwords.dto';

@Injectable()
export class PasswordsService {
  constructor(
    @InjectModel(Password.name)
    private password: Model<passwordDocument>
  ){}

  create(createUrlDto: CreatePasswordDto) {
    const selectClass = this.password
    const createdPass = new selectClass(createUrlDto)
    createdPass.save()
    return createdPass
  }

  async findAll() {
    const passwords = await this.password.find({})
    return passwords
  }

  async findOne(id: string) {
    const password = await this.password.findById(id)
    return password
  }

  async update(id: string, updateUrlDto: UpdatePasswordDto) {
    const updatedPass = await this.password.findByIdAndUpdate(id, updateUrlDto)
    return updatedPass
  }
  
  async remove(id: string) {
    const updatedPass = await this.password.findByIdAndDelete(id)
    return updatedPass
  }
}

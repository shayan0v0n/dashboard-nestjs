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
    return createdUser
  }

    //USER CRUD
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
    return deletedUser
  }

      //NOTELIST => ONE TO MANY
  async addNoteList(userId:string, noteId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $addToSet: { noteList: noteId } },
      { new: true },
    )
  }

  async removeNoteList(userId:string, noteId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $pull: { noteList: noteId } },
      { new: true },
    );
  }

  async getUserNoteList(userId:string) {
    const userNoteList = await this.users.findById(userId).populate('noteList');
    return userNoteList.noteList;
  }
  
    //URLS => ONE TO MANY
  async addurl(userId:string, urlId:string) {
  return this.users.findByIdAndUpdate(
    userId,
    { $addToSet: { urls: urlId } },
    { new: true },
  )
  }

  async removeUrl(userId:string, urlId:string) {
  return this.users.findByIdAndUpdate(
    userId,
    { $pull: { urls: urlId } },
    { new: true },
  );
  }

  async getUserUrl(userId:string) {
  const userUrls = await this.users.findById(userId).populate('urls');
  return userUrls.urls;
  }

  //PASSWORD => ONE TO MANY
  async addPassword(userId:string, PassId:string) {
  return this.users.findByIdAndUpdate(
    userId,
    { $addToSet: { passwords: PassId } },
    { new: true },
  )
  }

  async removePassword(userId:string, PassId:string) {
  return this.users.findByIdAndUpdate(
    userId,
    { $pull: { passwords: PassId } },
    { new: true },
  );
  }

  async getUserPassword(userId:string) {
  const userPassword = await this.users.findById(userId).populate('passwords');
  return userPassword.passwords;
  }

  //ACTIVELIST => ONE TO MANY
  async addActiveListTodo(userId:string, todoId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $addToSet: { activeList: todoId } },
      { new: true },
    )
    }
  
    async removeActiveListTodo(userId:string, todoId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $pull: { activeList: todoId } },
      { new: true },
    );
    }
  
    async getUserActiveList(userId:string) {
    const userActiveList = await this.users.findById(userId).populate('activeList');
    return userActiveList.activeList;
    }

    //ACTIVELIST => ONE TO MANY
  async addDoneListTodo(userId:string, todoId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $addToSet: { doneList: todoId } },
      { new: true },
    )
    }
  
  async removeDoneListTodo(userId:string, todoId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $pull: { doneList: todoId } },
      { new: true },
    );
    }
  
  async getUserDoneList(userId:string) {
    const userDoneList = await this.users.findById(userId).populate('doneList');
    return userDoneList.doneList;
    }

    //INCOMEWALLET => ONE TO MANY
  async addIncomeWallet(userId:string, incomeId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $addToSet: { incomeWallet: incomeId } },
      { new: true },
    )
    }
  
  async removeIncomeWallet(userId:string, incomeId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $pull: { incomeWallet: incomeId } },
      { new: true },
    );
    }
  
  async getUserIncomeWallet(userId:string) {
    const userIncomeWallet = await this.users.findById(userId).populate('incomeWallet');
    return userIncomeWallet.incomeWallet;
    }

    //SPENDWALLET => ONE TO MANY
  async addSpendWallet(userId:string, incomeId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $addToSet: { spendWallet: incomeId } },
      { new: true },
    )
    }
  
  async removeSpendWallet(userId:string, incomeId:string) {
    return this.users.findByIdAndUpdate(
      userId,
      { $pull: { spendWallet: incomeId } },
      { new: true },
    );
    }
  
  async getUserSpendWallet(userId:string) {
    const userSpendWallet = await this.users.findById(userId).populate('spendWallet');
    return userSpendWallet.spendWallet;
    }
}

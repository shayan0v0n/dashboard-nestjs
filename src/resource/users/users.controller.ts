import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { NoteList } from 'src/schema/notesList.schema';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
    //USER CRUD
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

    //NOTELIST => ONE TO MANY
  @Patch('/:id/add-note/:noteId')
  addNoteList(@Param('id') userId: string, @Param('noteId') noteId: string) {
    return this.usersService.addNoteList(userId, noteId);
  }

  @Patch('/:id/remove-note/:noteId')
  removeNoteList(@Param('id') userId: string, @Param('noteId') noteId: string) {
    return this.usersService.removeNoteList(userId, noteId)
  }

  @Get('/:id/noteList')
  getUserNoteList(@Param('id') userId: string) {
    return this.usersService.getUserNoteList(userId)
  }
  
  //URLS => ONE TO MANY
  @Patch('/:id/add-url/:urlId')
  addurl(@Param('id') userId: string, @Param('urlId') urlId: string) {
    return this.usersService.addurl(userId, urlId);
  }

  @Patch('/:id/remove-url/:urlId')
  removeUrl(@Param('id') userId: string, @Param('urlId') urlId: string) {
    return this.usersService.removeUrl(userId, urlId)
  }

  @Get('/:id/url')
  getUserUrl(@Param('id') userId: string) {
    return this.usersService.getUserUrl(userId)
  }
  
  //PASSWORD => ONE TO MANY
  @Patch('/:id/add-pass/:passId')
  addPassword(@Param('id') userId: string, @Param('passId') passId: string) {
    return this.usersService.addPassword(userId, passId);
  }

  @Patch('/:id/remove-pass/:passId')
  removePassword(@Param('id') userId: string, @Param('passId') passId: string) {
    return this.usersService.removePassword(userId, passId)
  }

  @Get('/:id/pass')
  getUserPassword(@Param('id') userId: string) {
    return this.usersService.getUserPassword(userId)
  }

    //ACTIVELIST => ONE TO MANY
    @Patch('/:id/add-activeList/:todoId')
    addActiveListTodo(@Param('id') userId: string, @Param('todoId') todoId: string) {
      return this.usersService.addActiveListTodo(userId, todoId);
    }
  
    @Patch('/:id/remove-activeList/:todoId')
    removeActiveListTodo(@Param('id') userId: string, @Param('todoId') todoId: string) {
      return this.usersService.removeActiveListTodo(userId, todoId)
    }
  
    @Get('/:id/activeList')
    getUserActiveList(@Param('id') userId: string) {
      return this.usersService.getUserActiveList(userId)
    }
    
      //DONELIST => ONE TO MANY
    @Patch('/:id/add-doneList/:todoId')
    addDoneListTodo(@Param('id') userId: string, @Param('todoId') todoId: string) {
      return this.usersService.addDoneListTodo(userId, todoId);
    }
  
    @Patch('/:id/remove-doneList/:todoId')
    removeDoneListTodo(@Param('id') userId: string, @Param('todoId') todoId: string) {
      return this.usersService.removeDoneListTodo(userId, todoId)
    }
  
    @Get('/:id/doneList')
    getUserDoneList(@Param('id') userId: string) {
      return this.usersService.getUserDoneList(userId)
    }
    
      //INCOMEWALLET => ONE TO MANY
    @Patch('/:id/add-incomeWallet/:incomeId')
    addIncomeWallet(@Param('id') userId: string, @Param('incomeId') incomeId: string) {
      return this.usersService.addIncomeWallet(userId, incomeId);
    }
  
    @Patch('/:id/remove-incomeWallet/:incomeId')
    removeIncomeWallet(@Param('id') userId: string, @Param('incomeId') incomeId: string) {
      return this.usersService.removeIncomeWallet(userId, incomeId)
    }
  
    @Get('/:id/incomeWallet')
    getUserIncomeWallet(@Param('id') userId: string) {
      return this.usersService.getUserIncomeWallet(userId)
    }

      //SPENDWALLET => ONE TO MANY
    @Patch('/:id/add-spendWallet/:spendeId')
    addSpendWallet(@Param('id') userId: string, @Param('spendeId') spendeId: string) {
      return this.usersService.addSpendWallet(userId, spendeId);
    }
  
    @Patch('/:id/remove-spendWallet/:spendeId')
    removeSpendWallet(@Param('id') userId: string, @Param('spendeId') spendeId: string) {
      return this.usersService.removeSpendWallet(userId, spendeId)
    }
  
    @Get('/:id/spendWallet')
    getUserSpendWallet(@Param('id') userId: string) {
      return this.usersService.getUserSpendWallet(userId)
    }

}

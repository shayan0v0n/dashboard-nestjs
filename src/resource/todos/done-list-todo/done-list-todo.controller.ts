import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateDoneListTodoDto, UpdateDoneListTodoDto } from './done-list-todo.dto';
import { DoneListTodoService } from './done-list-todo.service';

@Controller('/api/doneListTodo')
export class DoneListTodoController {
  constructor(private readonly doneListTodoService: DoneListTodoService) {}

  @Post()
  create(@Body() createDoneListTodoDto: CreateDoneListTodoDto) {
    return this.doneListTodoService.create(createDoneListTodoDto);
  }

  @Get()
  findAll() {
    return this.doneListTodoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doneListTodoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoneListTodoDto: UpdateDoneListTodoDto) {
    return this.doneListTodoService.update(id, updateDoneListTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doneListTodoService.remove(id);
  }
}

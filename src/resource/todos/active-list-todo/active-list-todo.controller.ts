import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateActiveListTodoDto, UpdateActiveListTodoDto } from './active-list-todo.dto';
import { ActiveListTodoService } from './active-list-todo.service';

@Controller('/api/activeListTodo')
export class ActiveListTodoController {
  constructor(private readonly activeListTodoService: ActiveListTodoService) {}

  @Post()
  create(@Body() createActiveListTodoDto: CreateActiveListTodoDto) {
    return this.activeListTodoService.create(createActiveListTodoDto);
  }

  @Get()
  findAll() {
    return this.activeListTodoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activeListTodoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActiveListTodoDto: UpdateActiveListTodoDto) {
    return this.activeListTodoService.update(id, updateActiveListTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activeListTodoService.remove(id);
  }
}

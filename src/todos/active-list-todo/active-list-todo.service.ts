import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActiveListTodo, ActiveListTodoDocument } from 'src/schema/activeListTodo.schema';
import { CreateActiveListTodoDto, UpdateActiveListTodoDto } from './active-list-todo.dto';

@Injectable()
export class ActiveListTodoService {
  constructor(
    @InjectModel(ActiveListTodo.name)
    private activeListTodo: Model<ActiveListTodoDocument>
  ){}

  create(createActiveListTodoDto: CreateActiveListTodoDto) {
    const selectClass = this.activeListTodo
    const createTodo = new selectClass(createActiveListTodoDto)
    createTodo.save()
    return createTodo;
  }

  async findAll() {
    const todos = await this.activeListTodo.find({})
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.activeListTodo.findById(id)
    return todo;
  }

  async update(id: string, updateActiveListTodoDto: UpdateActiveListTodoDto) {
    const selectClass = await this.activeListTodo
    const updatedTodo = await selectClass.findByIdAndUpdate(id, updateActiveListTodoDto)
    return updatedTodo
  }

  async remove(id: string) {
    const selectClass = await this.activeListTodo
    const deletedTodo = await selectClass.findByIdAndDelete(id)
    return deletedTodo;
  }
}

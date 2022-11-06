import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoneListTodo, DoneListTodoDocument } from 'src/schema/doneListTodo.schema';
import { CreateDoneListTodoDto, UpdateDoneListTodoDto } from './done-list-todo.dto';

@Injectable()
export class DoneListTodoService {
  constructor(
    @InjectModel(DoneListTodo.name)
    private doneListTodo: Model<DoneListTodoDocument>
  ){}

  create(createDoneListTodoDto: CreateDoneListTodoDto) {
    const selectClass = this.doneListTodo
    const createTodo = new selectClass(createDoneListTodoDto)
    createTodo.save()
    return createTodo;
  }

  async findAll() {
    const todos = await this.doneListTodo.find({})
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.doneListTodo.findById(id)
    return todo;
  }

  async update(id: string, updateDoneListTodoDto: UpdateDoneListTodoDto) {
    const selectClass = await this.doneListTodo
    const updatedTodo = await selectClass.findByIdAndUpdate(id, updateDoneListTodoDto)
    return updatedTodo
  }

  async remove(id: string) {
    const selectClass = await this.doneListTodo
    const deletedTodo = await selectClass.findByIdAndDelete(id)
    return deletedTodo;
  }
}

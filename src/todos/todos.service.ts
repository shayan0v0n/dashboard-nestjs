import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActiveListTodo, ActiveListTodoDocument } from 'src/schema/activeListTodo.schema';
import { DoneListTodo, DoneListTodoDocument } from 'src/schema/doneListTodo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(ActiveListTodo.name)
    private activeListTodo: Model<ActiveListTodoDocument>,
    @InjectModel(DoneListTodo.name)
    private doneListTodo: Model<DoneListTodoDocument>
  ){}


  async findAll() {
    const activeListTodos = await this.activeListTodo.find({})
    const doneListTodos = await this.doneListTodo.find({})
    const mergedList = activeListTodos.concat(doneListTodos)
    
    return mergedList
  }

  async findOne(id: string) {
    const activeListTodos = await this.activeListTodo.findById(id)
    const doneListTodos = await this.doneListTodo.findById(id)
    if (activeListTodos !== null) return activeListTodos
    else if(doneListTodos !== null) return doneListTodos
    return {}
  }
}

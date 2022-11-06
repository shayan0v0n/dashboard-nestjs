import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DoneListTodoModule } from './done-list-todo/done-list-todo.module';
import { ActiveListTodoModule } from './active-list-todo/active-list-todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DoneListTodo, doneListTodoSchema } from 'src/schema/doneListTodo.schema';
import { ActiveListTodo, activeListTodoSchema } from 'src/schema/activeListTodo.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: DoneListTodo.name, schema: doneListTodoSchema }]),
    MongooseModule.forFeature([{ name: ActiveListTodo.name, schema: activeListTodoSchema }]),
    ActiveListTodoModule,
    DoneListTodoModule
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}

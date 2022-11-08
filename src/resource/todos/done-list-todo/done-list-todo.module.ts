import { Module } from '@nestjs/common';
import { DoneListTodoService } from './done-list-todo.service';
import { DoneListTodoController } from './done-list-todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoneListTodo, doneListTodoSchema } from 'src/schema/doneListTodo.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: DoneListTodo.name, schema: doneListTodoSchema }])
  ],
  controllers: [DoneListTodoController],
  providers: [DoneListTodoService]
})
export class DoneListTodoModule {}

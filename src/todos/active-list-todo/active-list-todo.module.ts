import { Module } from '@nestjs/common';
import { ActiveListTodoService } from './active-list-todo.service';
import { ActiveListTodoController } from './active-list-todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActiveListTodo, activeListTodoSchema } from 'src/schema/activeListTodo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ActiveListTodo.name, schema: activeListTodoSchema }])
  ],
  controllers: [ActiveListTodoController],
  providers: [ActiveListTodoService]
})
export class ActiveListTodoModule {}

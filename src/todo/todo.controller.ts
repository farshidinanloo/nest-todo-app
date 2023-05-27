import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { User } from 'src/user/decorators/user.decorator';
import { TodoService } from './todo.service';
import { GetTodosDto, UpdateTodoDto } from './dto/todo.dto';
import { Prisma } from '@prisma/client';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(@Query() query: GetTodosDto, @User() userId: string) {
    return this.todoService.getTodos(userId, query);
  }

  @Post()
  createTodo(@Body() body: Prisma.TodoCreateInput, @User() userId: string) {
    return this.todoService.createTodo(body, userId);
  }

  @Patch(':id')
  updateTodo(
    @Body() body: UpdateTodoDto,
    @Param('id') id: string,
    @User() userId: string,
  ) {
    return this.todoService.updateTodo(body, id, userId);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string, @User() userId: string) {
    return this.todoService.deleteTodo(id, userId);
  }
}

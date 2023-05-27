import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetTodosDto, UpdateTodoDto } from './dto/todo.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTodos(userId: string, query: GetTodosDto) {
    const { isCompleted, searchQuery } = query;
    return await this.prismaService.todo.findMany({
      where: {
        userId,
        isCompleted: isCompleted,
        text: {
          contains: searchQuery,
        },
      },
    });
  }

  async getTodo(id: string, userId: string, query?: GetTodosDto) {
    const { isCompleted, searchQuery } = query || {};

    const todo = await this.prismaService.todo.findFirst({
      where: {
        userId,
        id,
        isCompleted: isCompleted,
        text: {
          contains: searchQuery,
        },
      },
    });

    return todo;
  }

  async createTodo({ text }: Prisma.TodoCreateInput, userId: string) {
    const todo = await this.prismaService.todo.create({
      data: { userId, text, isCompleted: false },
    });

    return todo;
  }

  async updateTodo(
    { text, isCompleted }: UpdateTodoDto,
    id: string,
    userId: string,
  ) {
    const isTodoExist = await this.getTodo(id, userId);

    if (!isTodoExist) {
      return new NotFoundException();
    }

    const todo = await this.prismaService.todo.update({
      where: { id },
      data: { text, isCompleted },
    });
    return todo;
  }

  async deleteTodo(id: string, userId: string) {
    const isTodoExist = await this.getTodo(id, userId);

    if (!isTodoExist) {
      return new NotFoundException();
    }

    return await this.prismaService.todo.delete({ where: { id } });
  }
}

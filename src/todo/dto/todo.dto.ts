import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class GetTodosDto {
  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;

  @IsString()
  @IsOptional()
  searchQuery: string;
}

export class CreateTodoDto {
  @IsString()
  text: string;
}

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  text: string;

  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}

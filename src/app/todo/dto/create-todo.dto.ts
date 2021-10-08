import { IsIn, IsNotEmpty } from "class-validator"

export class CreateTodoDto {
  @IsNotEmpty()
  task: string

  @IsNotEmpty()
  @IsIn([0, 1])
  IsDone: number
}
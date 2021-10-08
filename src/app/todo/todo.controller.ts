import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { TodoEntity } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  async index() {
    return await this.todoService.findAll()
  }

  @Get('id/:id')
  @HttpCode(200)
  async show (@Param('id', new ParseUUIDPipe()) id: string ) {
    return await this.todoService.findOneOrFail(id)
  }

  @Post()
  @HttpCode(201)
  async create (@Body() body: TodoEntity) {
    return await this.todoService.create(body)
  }

  @Put('id/:id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: TodoEntity) {
    await this.todoService.update(id, body)
  }

  @Delete('id/:id')
  @HttpCode(204)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.todoService.deleteById(id)
  }
}

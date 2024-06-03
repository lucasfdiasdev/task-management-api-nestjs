import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './taks.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}
  @Post()
  create(@Body() task: TaskDto) {
    this.tasksService.create(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string): TaskDto {
    return this.tasksService.findById(id);
  }

  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[] {
    return this.tasksService.findAll(params);
  }

  @Put()
  update(@Body() task: TaskDto) {
    this.tasksService.update(task);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): TaskDto {
    return this.tasksService.remove(id);
  }
}

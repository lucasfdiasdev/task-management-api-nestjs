import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './taks.dto';
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
}

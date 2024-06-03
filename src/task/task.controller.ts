import { Body, Controller, Post } from '@nestjs/common';
import { TaskDto } from './taks.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}
  @Post()
  create(@Body() task: TaskDto) {
    this.tasksService.create(task);
  }
}
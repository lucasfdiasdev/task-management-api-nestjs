import { Injectable } from '@nestjs/common';
import { TaskDto } from './taks.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}

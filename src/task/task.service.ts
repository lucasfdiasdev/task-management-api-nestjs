import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskDto } from './taks.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.filter((t) => t.id === id);

    if (foundTask.length) {
      return foundTask[0];
    }

    throw new HttpException(`Task ${id} does not exist`, HttpStatus.NOT_FOUND);
  }
}

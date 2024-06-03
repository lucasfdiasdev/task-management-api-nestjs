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

  update(task: TaskDto) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;
      return;
    }

    throw new HttpException(
      `Task ${task.id} does not exist`,
      HttpStatus.BAD_REQUEST,
    );
  }

  remove(id: string): TaskDto {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);

    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1)[0];
      return;
    }

    throw new HttpException(
      `Task ${id} does not exist`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

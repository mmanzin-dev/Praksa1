import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}


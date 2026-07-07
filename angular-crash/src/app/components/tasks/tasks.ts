import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks: Task[] = TASKS;
}

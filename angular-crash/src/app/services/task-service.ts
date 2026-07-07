import { Service } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Service()
export class TaskService {
    constructor() {}

    getTasks(): Observable<Task[]> {
        const tasks = of(TASKS);
        return tasks;
    }
}

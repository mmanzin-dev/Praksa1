import { Service, inject, Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Service()
export class TaskService {
    private apiUrl = 'http://localhost:5000/tasks'

    private http = inject(HttpClient);

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl)
    }
}

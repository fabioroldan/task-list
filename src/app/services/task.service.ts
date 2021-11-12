import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
    // .pipe(
    //   catchError(this['handleError']('deleteHero'))
    // );
  }


  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}

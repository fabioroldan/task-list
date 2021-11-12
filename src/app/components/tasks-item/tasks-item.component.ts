import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = { text: "", day: "", reminder: false };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    // console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    // console.log(task);
    this.onToggleReminder.emit(task);
  }
}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taksService: TaskService) { }

  ngOnInit(): void {
    this.taksService.getTasks().subscribe((data) => this.tasks = data);
  }
}

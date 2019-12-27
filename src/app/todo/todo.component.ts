import { Component, OnInit } from '@angular/core';
import {Todo} from '../interface';
import {TodoService} from '../providers/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todoList: Todo[];
    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todoList = this.todoService.getTodos();
    }

    delete(ids: number[]) {
        this.todoList = this.todoService.delete(ids);
    }

    add(data: Partial<Todo>) {
        this.todoList = this.todoService.addTodo(data);
    }

}

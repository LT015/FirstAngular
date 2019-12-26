import { Component, OnInit } from '@angular/core';
import {Todo} from '../interface';

interface PrivateTod extends Todo {
    selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todos: PrivateTod[] = [
        {id: 999, description: 'For test purposes1', category: 1, content: '1'},
        {id: 998, description: 'For test purposes2', category: 1, content: '2'},
        {id: 997, description: 'For test purposes3', category: 1, content: '3'}
    ];

    selectAll = false;

  constructor() { }

  ngOnInit() {
  }

  delete(ids: number[]) {
        this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  }

  deleteSelected() {
      const ids = this.todos.filter(item => item.selected).map(item => item.id);
      this.delete(ids);
  }

  toggleAll() {
      this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
      this.selectAll = this.todos.every(item => item.selected);
  }

}

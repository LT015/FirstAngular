import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todos = [
        {id: 999, description: 'For test purposes1', category: 1, content: '1', selected: false},
        {id: 999, description: 'For test purposes2', category: 1, content: '2', selected: false}
    ];

    selectAll = false;

  constructor() { }

  ngOnInit() {
  }

  delete(ids) {
        this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  }

  toggleAll() {
      this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
      this.selectAll = this.todos.every(item => item.selected);
  }

}

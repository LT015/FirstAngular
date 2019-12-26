import { Component, OnInit } from '@angular/core';
import {Todo} from '../interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todoList: Todo[] = [
        {id: 999, description: 'For test purposes1', category: 1, content: '1'},
        {id: 998, description: 'For test purposes2', category: 1, content: '2'},
        {id: 997, description: 'For test purposes3', category: 1, content: '3'}
    ];
  constructor() { }

  ngOnInit() {
  }

  delete(ids: number[]) {
      this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
  }

}

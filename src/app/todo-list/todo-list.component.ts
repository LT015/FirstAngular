import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../interface';
import {ActivatedRoute, Router} from '@angular/router';

interface PrivateTod extends Todo {
    selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Input()
    todos: PrivateTod[];

    @Output()
    delete: EventEmitter<number[]> = new EventEmitter();

    selectAll = false;

    constructor(private router: Router, private route: ActivatedRoute) { } // 注入服务

  ngOnInit() {
  }

  // delete(ids: number[]) {
  //       this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  // }

  deleteSelected() {
      const ids = this.todos.filter(item => item.selected).map(item => item.id);
      this.delete.next(ids);
  }

  toggleAll() {
      this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
      this.selectAll = this.todos.every(item => item.selected);
  }

  navigateTo(todo: PrivateTod, enent: MouseEvent) {
      if (enent.target instanceof HTMLTableCellElement) {
          this.router.navigate([todo.id], {relativeTo: this.route});
      }
  }

}

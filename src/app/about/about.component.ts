import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html', // 这个组件的模版
  styleUrls: ['./about.component.css'] // 样式文件 是一个数组，可以引用多个css文件
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

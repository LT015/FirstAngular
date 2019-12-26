import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

    @Input()
    text: string;

    @Input()
    disabled: false;

    @Output()
    click$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

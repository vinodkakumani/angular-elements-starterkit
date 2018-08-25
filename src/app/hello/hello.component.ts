import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  @Input() label = 'Say Hello';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}

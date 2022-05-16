import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() cl = 'grey';
  @Output() msgToFirst = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendMsg() {
    this.msgToFirst.emit('Message de la part du Child');
  }
}

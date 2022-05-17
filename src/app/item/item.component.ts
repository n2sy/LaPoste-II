import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() sendCandToList = new EventEmitter<Candidat>();
  constructor() {}

  ngOnInit(): void {}

  sendEvent() {
    this.sendCandToList.emit(this.oneCandidat);
  }
}

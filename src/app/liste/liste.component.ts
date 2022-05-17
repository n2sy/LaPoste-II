import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listCandidats = [];
  @Output() sendCandToCv = new EventEmitter<Candidat>();
  constructor() {}

  ngOnInit(): void {}

  traitementDeList(cand) {
    this.sendCandToCv.emit(cand);
  }
}

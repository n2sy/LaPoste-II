import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListCandidatsService } from '../list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listCandidats = [];
  @Output() sendCandToCv = new EventEmitter<Candidat>();
  constructor(private candSer: ListCandidatsService) {}

  ngOnInit(): void {
    // this.listCandidats = this.candSer.getAllCandidats();
  }

  traitementDeList(cand) {
    this.sendCandToCv.emit(cand);
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}

import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  tabCandidats = [
    new Candidat(1, 'Mohamed', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 18, 'Eleve', 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 52, 'Directeur', 'homer.jpg'),
  ];
  selectedCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {}

  traitementDuCv(cand) {
    this.selectedCandidat = cand;
  }
}

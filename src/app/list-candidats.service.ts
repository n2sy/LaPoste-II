import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private listCandidats = [
    new Candidat(1, 'Mohamed', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 18, 'Eleve', 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 52, 'Directeur', 'homer.jpg'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.listCandidats;
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }

  showMessage() {
    alert('Je suis le service !');
  }

  addNewCandidat() {
    this.listCandidats.push(
      new Candidat(3, 'New', 'Candidat', 52, 'Directeur', 'homer.jpg')
    );
  }
}

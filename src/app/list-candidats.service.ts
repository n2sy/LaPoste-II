import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private listCandidats = [
    // new Candidat(1, 'Mohamed', 'Jelassi', 38, 'Enseignant', 'nidhal.jpg'),
    // new Candidat(2, 'Bart', 'Simpson', 18, 'Eleve', 'bart.jpeg'),
    // new Candidat(3, 'Homer', 'Simpson', 52, 'Directeur', 'homer.jpg'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.listCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(id) {
    return this.listCandidats.find((c) => c._id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  showMessage() {
    alert('Je suis le service !');
  }

  addCandidat(newC) {
    newC.id = this.listCandidats[this.listCandidats.length - 1]._id + 1;
    this.listCandidats.push(newC);
  }
  addCandidatAPI(newC) {
    return this.http.post(this.link, newC);
  }

  deleteCandidat(Cand) {
    let i = this.listCandidats.indexOf(Cand);
    this.listCandidats.splice(i, 1);
  }

  deleteCandidatAPI(Cand) {
    return this.http.delete(`${this.link}/${Cand._id}`);
  }

  updateCandidat(Cand) {
    let i = this.listCandidats.indexOf(Cand);
    this.listCandidats[i] = Cand;
  }
  updateCandidatAPI(Cand) {
    return this.http.put(`${this.link}/${Cand._id}`, Cand); // Template string
  }
}

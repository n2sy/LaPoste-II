import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    // V1 avec httparams
    // let token = localStorage.getItem('my_token');
    // if (token) {
    //   let p = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, newC, { params: p });
    // }
    // return this.http.post(this.link, newC);

    // V2 avec httpHEaders
    // let token = localStorage.getItem('my_token');
    // if (token) {
    //   let p = new HttpHeaders().set('Authorization', 'bearer ' + token);
    //   return this.http.post(this.link, newC, { headers: p });
    // }
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

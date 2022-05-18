import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  private tabRecrues: Candidat[] = [];

  constructor() {}

  getAllRecrues() {
    return this.tabRecrues;
  }

  addNewRecrue(newRecrue) {
    if (this.tabRecrues.indexOf(newRecrue) != -1)
      alert('Cette personne a déjà été recrutée !');
    else this.tabRecrues.push(newRecrue);
  }
}

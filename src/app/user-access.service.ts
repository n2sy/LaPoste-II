import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserAccessService {
  link = 'http://localhost:3000/auth/login';
  constructor(private http: HttpClient) {}

  seConnecter(u) {
    return this.http.post(this.link, u);
  }

  estConnecte() {
    let token = localStorage.getItem('my_token');
    if (token) {
      return true;
    }
    return false;
  }

  seDeconnecter() {
    localStorage.removeItem('my_token');
  }
}

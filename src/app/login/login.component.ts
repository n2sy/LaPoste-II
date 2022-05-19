import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultJob = 'La Poste';
  commentaire = 'bla bla';
  constructor() {}

  ngOnInit(): void {}

  showForm(f) {
    console.log(f.value);
  }
}

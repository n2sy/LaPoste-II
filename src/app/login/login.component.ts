import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultJob = 'La Poste';
  commentaire = 'bla bla';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get('https://jsonpjjjlaceholder.typicode.com/users').subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé');
    //   },
    // });
  }

  showForm(f) {
    console.log(f.value);
  }
}

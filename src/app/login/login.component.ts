import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccessService } from '../user-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultJob = 'La Poste';
  commentaire = 'bla bla';
  constructor(
    private http: HttpClient,
    private router: Router,
    private userSer: UserAccessService
  ) {}

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

  loginUser(logUser) {
    this.userSer.seConnecter(logUser).subscribe({
      next: (response) => {
        localStorage.setItem('my_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
    });
  }

  showForm(f) {
    console.log(f.value);
  }
}

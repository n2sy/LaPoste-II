import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent implements OnInit {
  listAccounts = [
    {
      nom: 'Nidhal Account',
      statut: 'active',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  traitementDuHome(newAccount) {
    this.listAccounts.push(newAccount);
  }
}

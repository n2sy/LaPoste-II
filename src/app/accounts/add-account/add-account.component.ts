import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  nom;
  statut;
  @Output() sendAccToHome = new EventEmitter<{ nom: string; statut: string }>();
  constructor() {}

  ngOnInit(): void {}

  addAccount() {
    this.sendAccToHome.emit({
      nom: this.nom,
      statut: this.statut,
    });
  }
}

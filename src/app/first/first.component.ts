import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'La Poste Tunisienne';
  adresse = 'bla bla bla';
  color = 'pink';
  hd = false;
  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert('Click détecté');
  }

  traitementDuParent(msg) {
    alert(msg);
  }
}

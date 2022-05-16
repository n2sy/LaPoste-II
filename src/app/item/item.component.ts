import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {}
}

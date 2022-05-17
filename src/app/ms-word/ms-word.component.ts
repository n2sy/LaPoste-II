import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  listPolices = ['', 'Garamond', 'Phosphate', 'Arial'];
  bg;
  cl;
  fSize;
  fFamily;
  constructor() {}

  ngOnInit(): void {}

  changeSize(newValue) {
    this.fSize = newValue + 'px';
  }
}

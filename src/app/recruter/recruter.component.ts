import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent implements OnInit {
  listRec = [];
  constructor(private recSer: ListRecruesService) {}

  ngOnInit(): void {
    this.listRec = this.recSer.getAllRecrues();
  }
}

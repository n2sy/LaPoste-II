import { Component, OnInit } from '@angular/core';
import { ListCandidatsService } from '../list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  tabCandidats: any = [];
  selectedCandidat: Candidat;

  constructor(private candSer: ListCandidatsService) {}

  ngOnInit(): void {
    // this.tabCandidats = this.candSer.getAllCandidats();
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        console.log(response);

        this.tabCandidats = response;
      },
      error: (err) => {
        console.log('Probleme avec getAllCandidats');
      },
    });
  }

  traitementDuCv(cand) {
    this.selectedCandidat = cand;
  }

  addCandidat() {
    //this.candSer.addNewCandidat();
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}

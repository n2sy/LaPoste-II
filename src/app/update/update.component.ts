import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  candidatUpdated;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.snapshot.paramMap.get('id');

    this.candSer
      .getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response) => {
          this.candidatUpdated = response;
        },
      });
  }

  editCandidat() {
    // this.candSer.updateCandidat(this.candidatUpdated);

    // this.router.navigateByUrl('/cv');
    this.candSer.updateCandidatAPI(this.candidatUpdated).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Probleme avec Update');
      },
    });

    this.router.navigateByUrl('/cv');
  }
}

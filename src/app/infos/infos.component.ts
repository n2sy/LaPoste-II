import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  cand;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     console.log(p['id']);
    //   },
    // });

    //let id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(id);

    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     console.log(p.get('id'));
    //     this.cand = this.candSer.getCandidatById(p.get('id'));
    //   },
    // });
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.cand = response;
          },
        });
      },
    });
  }

  deleteCandidat() {
    // if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
    //   this.candSer.deleteCandidat(this.cand);
    //   this.router.navigateByUrl('/cv');
    // }
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.cand).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

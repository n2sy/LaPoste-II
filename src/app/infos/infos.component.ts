import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
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

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));
        this.cand = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }
}

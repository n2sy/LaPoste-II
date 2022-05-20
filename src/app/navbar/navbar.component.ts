import { Component, OnInit } from '@angular/core';
import { UserAccessService } from '../user-access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public allowSser: UserAccessService) {}

  ngOnInit(): void {}
}

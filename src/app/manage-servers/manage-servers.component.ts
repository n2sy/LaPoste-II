import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  tabServers = [
    {
      name: 'Development Server',
      type: 'small',
      date_d: new Date(2020, 12, 13),
      statut: 'critical',
    },
    {
      name: 'Development Test Server',
      type: 'small',
      date_d: new Date(2020, 12, 13),
      statut: 'stable',
    },
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 12, 13),
      statut: 'stable',
    },
    {
      name: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(2020, 12, 13),
      statut: 'offline',
    },
  ];
  selStatus = '';
  constructor() {}

  ngOnInit(): void {}

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-danger': st == 'critical' ? true : false,
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }

  addNewServer() {
    this.tabServers.push({
      name: 'NEW Server',
      type: 'medium',
      date_d: new Date(2020, 12, 13),
      statut: 'offline',
    });
  }
}

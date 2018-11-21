import { Component, OnInit } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bases: i.Base[];
  orgs: i.Organization[];
  orgsByBase: i.Organization[];
  selectedBase: i.Base;
  selectedOrg: i.Organization;
  message: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.Bases.subscribe(bases => {
      this.bases = bases;
    });
    this.api.Orgs.subscribe(orgs => {
      this.orgs = orgs;
    });
    this.api.getBases();
    this.api.getOrgs();
  }

  basesOutput($event: i.Base) {
    this.selectedBase = $event;
    this.setOrgsByBase($event);
    console.log('Bases output: ', $event);
  }

  orgsOutput($event: i.Organization) {
    this.selectedOrg = $event;
    console.log('Orgs Output: ', $event);
  }

  messageOutput($event: string) {
    this.message = $event;
    console.log('Message Output:', $event);
  }

  setOrgsByBase(base: i.Base) {
    if (base) {
      this.orgsByBase = this.orgs.filter(org => {
        return org.baseId === base.id;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';
import * as _ from 'lodash';

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
  selectedOrgId: number;
  message: string;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.Bases.subscribe(bases => {
      this.bases = bases;
    });
    this.api.Orgs.subscribe(orgs => {
      this.orgs = orgs;
      this.setOrgsByBase(this.selectedBase);
    });
    this.api.getBases();
    this.api.getOrgs();
  }

  basesOutput($event: i.Base) {
    this.selectedBase = $event;
    this.setOrgsByBase($event);
    // console.log('Bases output: ', $event);
  }

  orgsOutput($event: i.Organization) {
    // console.log('Orgs Output: ', $event);
    if ($event) {
      this.selectedOrg = $event;
      this.selectedOrgId = $event.id;
    } else {
      this.selectedOrgId = null;
      this.selectedOrg = null;
    }
  }

  messageOutput($event: string) {
    this.message = $event;
    // console.log('Message Output:', $event);
  }

  setOrgsByBase(base: i.Base) {
    if (base) {
      this.orgsByBase = this.orgs.filter(org => {
        return org.baseId === base.id;
      });
    }
  }

  showOrgList(): boolean {
    return !(_.isEmpty(this.selectedBase) || _.isEmpty(this.orgsByBase));
  }
}

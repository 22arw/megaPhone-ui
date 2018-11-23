import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  bases: i.Base[];
  orgs: i.Organization[];
  orgsByBase: i.Organization[];
  selectedBase: i.Base;
  selectedOrg: i.Organization;
  selectedOrgId: number;
  message: string;
  user: i.UserData;

  preferencesModal = false;

  emailUpdateForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  passwordUpdateForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  deleteAccntForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUserInfo().then(ret => {
      this.user = ret;
    });
    this.api.Bases.subscribe(bases => {
      this.bases = bases;
    });
    this.api.Orgs.subscribe(orgs => {
      this.orgs = orgs;
    });
    this.api.getBases();
    this.api.getOrgs();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    if (changes.bases || changes.orgs) {
      this.setOrgsByBase(this.selectedBase);
    }
  }

  basesOutput($event: i.Base) {
    this.selectedBase = $event;
    this.setOrgsByBase($event);
    console.log('Bases output: ', $event);
  }

  orgsOutput($event: i.Organization) {
    console.log('Orgs Output: ', $event);
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
    console.log('Message Output:', $event);
  }

  setOrgsByBase(base: i.Base) {
    if (base) {
      this.orgsByBase = this.orgs.filter(org => {
        return org.baseId === base.id;
      });
    }
  }

  showOrgList(): boolean {
    this.setOrgsByBase(this.selectedBase);
    return !(_.isEmpty(this.selectedBase) || _.isEmpty(this.orgsByBase));
  }

  doLogout() {
    this.api.logout();
  }

  doEmailUpdate() {
    console.log(this.emailUpdateForm.value);
  }

  doPasswordUpdate() {
    console.log(this.passwordUpdateForm.value);
  }
  doAccountDelete() {
    console.log(this.deleteAccntForm.value);
  }
}

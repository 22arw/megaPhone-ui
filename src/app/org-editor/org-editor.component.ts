import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';
import * as jwtDecode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-org-editor',
  templateUrl: './org-editor.component.html',
  styleUrls: ['./org-editor.component.css']
})
export class OrgEditorComponent implements OnInit, OnChanges {
  @Input() org: i.Organization;

  canEditOrg = false;
  editOrgModal = false;

  addOrgManagerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  transferOwnerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  updateOrgForm = new FormGroup({
    orgName: new FormControl(''),
    subscriptionCode: new FormControl('')
  });

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.canEditOrg = this.setCanEditOrg();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.org) {
      this.canEditOrg = this.setCanEditOrg();
    }
  }

  setCanEditOrg(): boolean {
    const role = Number(localStorage.getItem('role'));
    if (role === 5) {
      return true;
    }

    const decoded = jwtDecode(localStorage.getItem('x-access-token')) as {
      data: number;
      iat: number;
      exp: number;
    };
    const isOrgOwner = Number(this.org.orgOwner) === Number(decoded.data);

    if (isOrgOwner) {
      return true;
    }

    this.api.isBaseManager(this.org.baseId).then(res => {
      this.canEditOrg = res;
    });
    return false;
  }

  addOrgManager() {
    console.log('addOrgManager(): ', this.addOrgManagerForm.value);
  }

  transferOrgOwner() {
    console.log('transferOrgOwner', this.transferOwnerForm.value)
  }

  updateOrg() {
    console.log('updateOrg(): ', this.updateOrgForm.value);
  }
}

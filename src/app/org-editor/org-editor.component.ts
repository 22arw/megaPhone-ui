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
import { ToastrService } from 'ngx-toastr';

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

  deleteOrgForm = new FormGroup({
    deletePhrase: new FormControl('', Validators.required)
  });

  constructor(private api: ApiService, private toastr: ToastrService) {}

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
    const email = this.addOrgManagerForm.value.email;
    this.api.createOrgManager(email, this.org.id);
  }

  transferOrgOwner() {
    const email = this.transferOwnerForm.value.email;
    this.api.updateOrgOwner(email, this.org.id);
  }

  updateOrg() {
    const orgName = this.updateOrgForm.value.orgName || this.org.orgName;
    const subscriptionCode = this.updateOrgForm.value.subscriptionCode || this.org.subscriptionCode;
    if (this.org.orgName === orgName && this.org.subscriptionCode === subscriptionCode) {
      this.toastr.error(`Please change the value to something different before submitting.`);
    } else {
      this.api.updateOrg(this.org.id, orgName, subscriptionCode);
    }
  }

  deleteOrg() {
    if (this.deleteOrgForm.value.deletePhrase === `Delete ${this.org.orgName}`) {
      this.api.updateOrgIsActive(false, this.org.id);
    } else {
      this.toastr.error(`Deletion phrase didn't match.`);
    }
  }
}

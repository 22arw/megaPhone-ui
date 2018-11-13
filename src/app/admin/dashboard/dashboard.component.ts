import { Component, OnInit, ViewChild } from '@angular/core';
import { Base } from 'src/app/core/interfaces/base';
import { BaseService } from 'src/app/core/services/base.service';
import { ClrDatagridStringFilterInterface, ClrWizard } from '@clr/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class BaseFilter implements ClrDatagridStringFilterInterface<Base> {
  accepts(bases: Base, search: string): boolean {
    return '' + bases.baseName === search
      || bases.baseName.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  baseCreateForm = new FormGroup({
    baseName: new FormControl('', Validators.required),
    basePhoneNumber: new FormControl('', Validators.required),
    bandwidthUserId: new FormControl('', Validators.required),
    bandwidthApiToken: new FormControl('', Validators.required),
    bandwidthApiSecret: new FormControl('', Validators.required)
  });

  baseManagerForm = new FormGroup({
    baseId: new FormControl('', Validators.required),
    newBaseManagerEmail: new FormControl('', Validators.required),
  });

  @ViewChild('baseWizard') wizardLarge: ClrWizard;

  baseWizardOpen = false;
  baseisCreated = false;
  managerisCreated = false;

  bases: Base[];
  base: Base;

  public baseFilter = new BaseFilter();

  constructor(public baseServ: BaseService) { }

  ngOnInit() {
    this.baseServ.getAllBases()
      .subscribe(
        res => this.bases = res['bases']
      );
  }

  onEdit(base) {
    console.log(base);
    this.base = base;
  }

  onToggle() {
    this.baseWizardOpen = !this.baseWizardOpen;
  }

  createBase() {
    console.log(this.baseCreateForm.value);
    this.baseServ.createBase(this.baseCreateForm.value)
      .subscribe(
        res => {
          console.log(res);
          if (res['success'] === true) {
            this.baseManagerForm.controls['baseId'].patchValue(res['base']['id']);
            return this.baseisCreated = !this.baseisCreated;
          }
        }
      );
  }

  createBaseManager() {
    console.log(this.baseCreateForm.value);
    this.baseServ.createBaseManager(this.baseManagerForm.value)
    .subscribe(
      res => {
        console.log(res);
        if (res['success'] === true) {
          return this.managerisCreated = !this.managerisCreated;
        }
      }
    );
  }


}

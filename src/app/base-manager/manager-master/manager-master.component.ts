import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/core/interfaces/base';
import { Organization } from 'src/app/core/interfaces/organization';
import { BaseService } from 'src/app/core/services/base.service';
import { OrgService } from 'src/app/core/services/org.service';

@Component({
  selector: 'app-manager-master',
  templateUrl: './manager-master.component.html',
  styleUrls: ['./manager-master.component.css']
})
export class ManagerMasterComponent implements OnInit {
  bases: Base[];
  orgs: Organization[];

  constructor(private baseService: BaseService, private orgService: OrgService) { }

  ngOnInit() {
    this.loadBases();
  }

  loadBases() {
    this.baseService.getAllBases()
      .subscribe(
        res => {
          this.bases = res['bases'];
          for (let i = 0; i < res['bases'].length; i++) {
            this.loadOrgs(res['bases'][i]['id']);
          }
        }
      );
  }

  loadOrgs(baseId) {
    this.baseService.getAllOrgsUnderBase(baseId)
      .subscribe(
        res => {
          console.log(res);
          this.orgs = res['orgs'];
        },
        err => console.log(err)
      );
  }

}

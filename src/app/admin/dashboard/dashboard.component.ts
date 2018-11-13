import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/core/interfaces/base';
import { BaseService } from 'src/app/core/services/base.service';
import { ClrDatagridStringFilterInterface } from '@clr/angular';
import { Observable } from 'rxjs';

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

  bases: Base[];

  public baseFilter = new BaseFilter();

  constructor(public baseServ: BaseService) { }

  ngOnInit() {
    this.baseServ.getAllBases()
      .subscribe(
        res => this.bases = res['bases']
      );
  }

}

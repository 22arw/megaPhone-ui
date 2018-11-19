import { Component, OnInit } from '@angular/core';
import { Base } from '../core/interfaces/base';
import { BaseService } from '../fake-services/base.service';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  bases: Base[];
  selectedBase: Base;


  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.getBases();
  }

  getBases() {
    this.baseService.getBases()
      .subscribe(
        res => {
          console.log(res);
          this.selectedBase = res[0];
          this.bases = res;
        }
      );
  }

  onSelect(base: Base) {
    console.log(base);
    this.selectedBase = base;
  }

}

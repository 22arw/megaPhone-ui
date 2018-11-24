import { Component, OnInit } from '@angular/core';
import { Base } from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {
  bases: Base[];
  selectedBase: string;
  // selectedBase: Base;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.Bases.subscribe(bases => {
      this.bases = bases;
    });
    this.api.getBases();
  }

  getBases() {}

  // onSelect(base: Base) {
  //   this.selectedBase = base;
  //   console.log(base);
  // }

  showSelected() {
    console.log(this.selectedBase);
  }
}

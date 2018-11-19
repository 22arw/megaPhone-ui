import { Component, OnInit } from '@angular/core';
import { Base } from '../core/interfaces/base';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.getBases();
  }

  getBases() {}

  onSelect(base: Base) {
    console.log(base);
  }
}

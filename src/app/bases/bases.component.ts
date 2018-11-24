import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as i from '../core/interfaces';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() bases: i.Base[];

  @Output() basesOutput = new EventEmitter<i.Base>();

  selected: number;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.bases.currentValue[0]) {
      // console.log('Bases component onChange: ', changes);
      this.selected = changes.bases.currentValue[0].id;
      this.onSelect(this.selected);
    }
  }

  onSelect(baseId: number) {
    // console.log('Selected baseId: ', baseId);
    const base = this.bases.filter(eachBase => {
      // tslint:disable-next-line:triple-equals
      return eachBase.id == baseId;
    });
    this.basesOutput.emit(base[0]);
  }
}

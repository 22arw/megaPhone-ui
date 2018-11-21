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
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() orgs: i.Organization[];

  @Output() orgsOutput = new EventEmitter<i.Organization>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.orgs.currentValue) {
      console.log('Org component onChange: ', changes);
      this.onSelect(changes.orgs.currentValue[0]);
    }
  }

  onSelect(org: i.Organization) {
    console.log('Selected org: ', org);
    this.orgsOutput.emit(org);
  }
}

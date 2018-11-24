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
export class OrganizationsComponent implements OnInit {
  constructor() {}

  _orgs: i.Organization[];
  @Input() set orgs(orgs: i.Organization[]) {
    // console.log('input orgs changed.');
    this._orgs = orgs;
    this.selectedOrg = orgs[0];
  }

  @Output() orgsOutput = new EventEmitter<i.Organization>();

  selectedOrg: i.Organization;

  ngOnInit() {
    this.onSelect(this._orgs[0]);
    this.selectedOrg = this._orgs[0];
  }

  onSelect(org: i.Organization) {
    // console.log('Selected org: ', org.id);
    this.orgsOutput.emit(org);
  }
}

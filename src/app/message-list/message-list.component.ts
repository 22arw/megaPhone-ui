import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ApiService } from '../core/api.service';
import * as i from '../core/interfaces';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges {
  // private _orgId: number;

  @Input() orgId: number;

  messages: i.Message[];

  constructor(private api: ApiService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('message received new org: ', this.orgId);
    if (
      changes.orgId.currentValue !== changes.orgId.previousValue &&
      changes.orgId.currentValue !== null
    ) {
      this.api.getAllMessagesSentByOrg(this.orgId).then(res => {
        // console.log(res);
        // sort messages by timestamp
        this.messages = res.sort(function(a, b) {
          return Date.parse(b.sent) - Date.parse(a.sent);
        });
      });
    } else {
      this.messages = [];
    }
  }
}

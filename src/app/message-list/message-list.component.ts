import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../core/api.service';
import * as i from '../core/interfaces';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnChanges {
  @Input() orgId: number;

  messages: i.Message[];

  constructor(private api: ApiService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.orgId) {
      this.api.getAllMessagesSentByOrg(this.orgId).then(res => {
        this.messages = res;
      });
    }
  }
}

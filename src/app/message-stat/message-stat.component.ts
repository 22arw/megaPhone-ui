import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-message-stat',
  templateUrl: './message-stat.component.html',
  styleUrls: ['./message-stat.component.css']
})
export class MessageStatComponent implements OnInit, OnChanges {
  constructor(private api: ApiService) {}

  @Input() message = '';
  @Input() org: i.Organization;
  @Input() base: i.Base;

  subscribers: number;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.org) {
      // console.log('updating subscriber count');
      this.api.getNumberOfSubscribers(this.org.id).then(res => {
        this.subscribers = res;
      });
    }
  }

  toPrettyPhone(phoneNumber: string): string {
    const phone = phoneNumber.substring(1).split('');
    return `${phone[0]} \(${phone[1]}${phone[2]}${phone[3]}\) ${phone[4]}${
      phone[5]
    }${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private api: ApiService) { }

  @Input() org: i.Organization;

  @Output() messageOutput = new EventEmitter<string>();

  message = '';

  ngOnInit() {
  }

  outputMessage(e: Event) {
    console.log(e);
    console.log(this.message);
    this.messageOutput.emit('a message.');
  }

  sendMessage() {
    this.api.sendMessage(this.org.id, this.message);
  }

}

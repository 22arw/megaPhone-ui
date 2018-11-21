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

  message: string;

  ngOnInit() {
  }

  outputMessage(e: Event) {
    console.log(e);
    this.messageOutput.emit('a message.');
    this.message = '';
  }

  sendMessage() {
    this.api.sendMessage(this.org.id, this.message);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {

  constructor(private api: ApiService) { }

  @Input() org: i.Organization;

  @Output() messageOutput = new EventEmitter<string>();

  message = '';

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.message) {
      console.log('Changes to message: ', this.message);
      this.messageOutput.emit(this.message);
    }
  }

  outputMessage(e: Event) {
    console.log(this.message);
    this.messageOutput.emit(this.message);
  }

  sendMessage() {
    this.api.sendMessage(this.org.id, this.message);
  }

}

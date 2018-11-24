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
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {
  constructor(private api: ApiService) {}

  @Input() org: i.Organization;

  @Output() messageOutput = new EventEmitter<string>();

  message = '';
  placeholder = '';

  ngOnInit() {
    this.setPlaceholderText();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.message) {
      // console.log('Changes to message: ', this.message);
      this.messageOutput.emit(this.message);
    }
    if (changes.org) {
      this.message = '';
    }
  }

  setPlaceholderText() {
    const placeholders = [
      'Craft your message here.',
      // tslint:disable-next-line:quotemark
      "You've got something awesome to say, don't you. Do it here. 😎",
      'Let everyone know their impact. 🙌',
      'It is always a good idea to share good news. 👍',
      'What a week! 💪',
      'Catch me later, I\'ll buy you a beer. 🍻'
    ];

    this.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  outputMessage(e: Event) {
    // console.log(this.message);
    this.messageOutput.emit(this.message);
  }

  sendMessage() {
    this.api.sendMessage(Number(this.org.id), this.message.toString());
  }

  isDisabled(): boolean {
    return !this.org || this.message.length === 0;
  }
}

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
  subscribers = 0;

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
      this.api.getNumberOfSubscribers(this.org.id).then(res => {
        this.subscribers = res;
      });
    }
  }

  setPlaceholderText() {
    const placeholders = [
      'Craft your message here.',
      `When you've got something awesome to say, do it here. 😎`,
      'Let everyone know their impact. 🙌',
      'It is always a good idea to share good news. 👍',
      `Catch me later, I'll buy you a beer. 🍻`,
      `If the pilot's good, see, I mean if he's reeeally sharp, he'll send a message right here ✈`,
      `I shouldn't tell you this, Mandrake, but you're a good officer and you've a right to know. It looks like we're in a shooting war.`,
      // tslint:disable-next-line:max-line-length
      `Okay, I'm going to get your money for you, but if you don't get the President of the United States on that phone, you know what's going to happen to you?
      What!?
      You're gonna have to answer to the Coca-Cola company. ☢`,
      'Who is John Galt?',
      `Toto, I've got a feeling we're not in Kansas anymore.`,
      `Surely you can't be serious.
      I am serious…and don't call me Shirley.`
    ];

    this.placeholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  outputMessage(e: Event) {
    // console.log(this.message);
    this.messageOutput.emit(this.message);
  }

  sendMessage() {
    this.api.sendMessage(Number(this.org.id), this.message.toString());
    this.message = '';
    this.messageOutput.emit('');
  }

  isDisabled(): boolean {
    return !this.org || this.message.length === 0 || this.subscribers === 0;
  }
}

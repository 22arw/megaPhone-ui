import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-stat',
  templateUrl: './message-stat.component.html',
  styleUrls: ['./message-stat.component.css']
})
export class MessageStatComponent implements OnInit {

  constructor() { }

  @Input() message: string;

  ngOnInit() {
  }

}

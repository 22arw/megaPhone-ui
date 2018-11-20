import { Component, OnInit } from '@angular/core';
import * as i from '../core/interfaces';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: i.UserData;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUserInfo().then(res => {
      this.user = res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser()
    .subscribe(
      res => this.user = res['user']
    );
  }

  logout() {
    return this.auth.appLogOut();
  }

}

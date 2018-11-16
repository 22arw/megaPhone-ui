import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrPassword } from '@clr/angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  login() {
    const data = this.loginForm.value as {email: string, password: string};
    this.api.login(data.email, data.password);
  }

  constructor(public auth: AuthService, public router: Router, private api: ApiService) {}

  ngOnInit() {}
}

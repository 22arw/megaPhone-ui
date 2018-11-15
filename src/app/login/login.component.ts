import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrPassword } from '@clr/angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  login() {
    const data = this.loginForm.value;
    this.auth.appLogin(data)
    .pipe(
      first()
    ).subscribe(
      res => {
        if (res['role'] === 5) {
          this.router.navigate(['/admin']);
        } else if (res['role'] === 4) {
          this.router.navigate(['base-manager']);
        } else if (res['role'] === 3) {
          this.router.navigate(['org-owner']);
        } else if (res['role'] === 2) {
          this.router.navigate(['org-manager']);
        }
      }
    );
  }

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i from '../core/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: i.UserData;

  preferencesModal = false;

  emailUpdateForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  passwordUpdateForm = new FormGroup({
    password: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  deleteAccntForm = new FormGroup({
    deleteConfirm: new FormControl('', [Validators.required])
  });

  constructor(private api: ApiService, private toastr: ToastrService) {}

  ngOnInit() {
    this.api.getUserInfo().then(ret => {
      this.user = ret;
    });
  }

  doLogout() {
    this.api.logout();
  }

  doEmailUpdate() {
    this.api.updateUserEmail(this.emailUpdateForm.value.email);
  }

  doPasswordUpdate() {
    const oldPassword = this.passwordUpdateForm.value.password as string;
    const password = this.passwordUpdateForm.value.newPassword as string;
    const confirmPassword = this.passwordUpdateForm.value
      .confirmPassword as string;
    this.api.resetPassword(oldPassword, password, confirmPassword);
  }
  doAccountDelete() {
    if (this.deleteAccntForm.value.deleteConfirm !== 'I want to delete my account.') {
      this.toastr.error('You must type the phrase in exactly.');
    }
    this.toastr.info('Deleting your account.');
    this.api.updateUserIsActive(false);
  }

  needsPasswordChange(): boolean {
    const needsPasswordChange = localStorage.getItem('needsPasswordChange');
    return needsPasswordChange === 'true';
  }
}

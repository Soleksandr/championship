import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { UserService } from '../../services/store/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  emilRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  validateEmail = (control: AbstractControl) => {
    if (!control.value) {
      return { email: 'Email is required' };
    }
    if (!this.emilRegEx.test(control.value)) {
      return { email: 'Invalid email' };
    }
    return null;
  };

  validatePassword = (control: AbstractControl) => {
    if (!control.value) {
      return { password: 'Password is required' };
    }
    return null;
  };

  signInForm = this.fb.group({
    email: ['', this.validateEmail],
    password: ['', this.validatePassword],
  });

  onSubmit() {
    this.userService.login(this.signInForm.value);
  }
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {}
}

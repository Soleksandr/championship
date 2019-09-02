import { Component, OnInit } from '@angular/core';

import { User } from '../../types/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  confirmPassError = '';

  onConfirmPassFocus() {
    if (this.confirmPassError) {
      this.confirmPassError = ""
    }
  }

  onConfirmPassBlur() {
    if (!this.user.confirmPassword) {
      this.confirmPassError = 'Required'
    } else if (this.user.password !== this.user.confirmPassword) {
      this.confirmPassError = 'Confirm password must be the same as password';
    }
  }

  onPassBlur() {
    if (this.user.confirmPassword && this.user.password !== this.user.confirmPassword) {
      this.confirmPassError = 'Confirm password must be the same as password';
    } else {
      this.confirmPassError = ''
    }
  }

  onSubmit() {
    console.log(this.user)
  }

  constructor() { }

  ngOnInit() {
  }

}

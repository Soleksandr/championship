import { Component, OnInit } from '@angular/core';

import { User } from '../../types/User';
import { UserService } from '../../services/store/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: User = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  confirmPassError = '';

  onConfirmPassInput() {
    if (!this.user.confirmPassword) {
      this.confirmPassError = 'Required';
    } else {
      this.confirmPassError = '';
    }
  }

  onConfirmPassBlur() {
    if (!this.user.confirmPassword) {
      this.confirmPassError = 'Required';
    } else if (this.user.password !== this.user.confirmPassword) {
      this.confirmPassError = 'Confirm password must be the same as password';
    }
  }

  onPassBlur() {
    if (this.user.confirmPassword && this.user.password !== this.user.confirmPassword) {
      this.confirmPassError = 'Confirm password must be the same as password';
    }
  }

  onSubmit() {
    this.userService.createUser(this.user);
  }

  ngOnInit() {}
}

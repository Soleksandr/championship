import { Component, OnInit } from '@angular/core';

import { User } from '../../types/User'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  onSubmit () {
    console.log(this.user)
  }

  constructor() { }

  ngOnInit() {
  }

}

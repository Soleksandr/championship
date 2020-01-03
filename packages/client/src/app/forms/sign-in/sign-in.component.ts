import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  // signInForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  onSubmit() {
    console.log('signInform ', this.signInForm);
    console.warn(this.signInForm.value);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}

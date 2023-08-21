// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit{
  myform: FormGroup;

  constructor(private authService: AuthService) {
    this.myform = new FormGroup({
      username: new FormControl(''),
      fullname: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.myform.controls;
  }

  onSignup() {
    if (this.myform.value['username'] && this.myform.value['fullname'] && this.myform.value['password']&& this.myform.value['email']) {

      this.authService.signup(this.myform.value['username'], this.myform.value['fullname'], this.myform.value['password'], this.myform.value['email'])
        .subscribe(
          user => {

            console.log('Sign-up successful!', user);
          },
          error => {

            console.error('Sign-up failed:', error);
          }
        );
    } else {

      console.error('Please fill in all required fields.');
    }
  }
}

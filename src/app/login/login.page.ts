import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';
import { FormGroup } from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logInFields: any;
  isSubmitted: boolean = false;
  loginForm!: FormGroup;
  logged: boolean = false;
  constructor(
    private formservice: FormsService,
    private users: UsersDataService,
    private router:Router
  ) {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.formservice.logInFormGroup;
    this.logInFields = this.formservice.LogInFields;
  }
  ngOnInit() {}
  submit() {
    this.isSubmitted = true;
    console.log('.');
    if (this.isSubmitted && this.loginForm.valid) {
      console.log('..');
      for (let i of this.users.users) {
        if (
          i.email == this.loginForm.value.email &&
          i.pass == this.loginForm.value.password
        ) {
          console.log('<><><><>', i.email);
          this.router.navigate(['/home']);

          this.logged = true;
          break;
        }
        this.logged = false
      }
      if (!this.logged) {
        console.log('Wrong Name or Password');
      }
    } else {
      console.log('Form is not valid');
    }
  }
}

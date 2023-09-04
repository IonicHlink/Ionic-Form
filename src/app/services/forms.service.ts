import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { regex } from '../regex.enum';
@Injectable({
  providedIn: 'root',
})
export class FormsService {
  isSubmitted: boolean = false;

  signUpFormGroup = this.fb.group({
    fName: ['', [Validators.required, Validators.pattern(regex.fName)]],
    lName: ['', [Validators.required, Validators.pattern(regex.lName)]],
    email: ['', [Validators.required, Validators.pattern(regex.email)]],
    mobile: ['', [Validators.required, Validators.pattern(regex.mobile)]],
    password: ['', [Validators.required, Validators.pattern(regex.password)]],
  });

  logInFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(regex.email)]],
    password: ['', [Validators.required, Validators.pattern(regex.password)]],
  });

  signUpFields: any = [
    {
      label: 'First Name',
      name: 'fName',
      error: 'The First Name should contain first capital letter.',
    },
    {
      label: 'Last Name',
      name: 'lName',
      error: 'The Last Name should contain first capital letter.',
    },
    {
      label: 'Email',
      name: 'email',
      error: 'Please enter valid email address.',
    },
    {
      label: 'Mobile',
      name: 'mobile',
      error: 'Please enter valid mobile number of 10 digits.',
    },
    {
      label: 'Password',
      name: 'password',
      error:
        'Please enter a password which contains capital?small letter, numbers and symbols',
    },
  ];

  LogInFields: any = [
    {
      label: 'Email',
      name: 'email',
      error: 'Please enter valid email address.',
    },
    {
      label: 'Password',
      name: 'password',
      error:
        'Please enter a password which contains capital?small letter, numbers and symbols',
    },
  ];

  constructor(private fb: FormBuilder) {
    console.log('form service started');
  }
}

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from '../services/forms.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  signUpForm!: FormGroup;
  isSubmitted: boolean = false;
  signUpFields: any;
  constructor(private formService: FormsService, private router: Router) {
    this.initForm();
  }
  change(){
    console.log('changed');
this.signUpFields
  }
  initForm() {
    this.signUpFields = this.formService.signUpFields;
    this.signUpForm = this.formService.signUpFormGroup;
  }
  submit() {
    this.isSubmitted = true;
    console.log('form submitting....');
    if (this.isSubmitted && this.signUpForm.valid) {
      console.log('Form is submitted');
      this.router.navigate(['/home']);
    } else {
      console.log('Form is not valid');
    }
  }
}

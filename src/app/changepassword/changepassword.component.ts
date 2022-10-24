import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import Validation from '../utils/validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public newPasswordValue: String= '';

  form: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;

  constructor(private appComponent: AppComponent, private formBuilder: FormBuilder) { 
    appComponent.hideLoginButton();
    appComponent.setRouteName("My Profile");
    appComponent.profileFlag = true;
    appComponent.hook1 = "Change Password";
    appComponent.hook1routerLink = "/ChangePassword";
    appComponent.hook2 = "Products";
    appComponent.hook2routerLink = "/Products";
    appComponent.status = true;
    appComponent.headerLineFlag = true;
    appComponent.hideMain();
    appComponent.setRouteName("My Profile / Change Password");
    appComponent.setActiveHook1();

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
         ,]
         ,
         currentpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
         ,],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      alert ("Password successfully changed");
      this.setValue();
      alert ("new password :: "+ this.newPasswordValue);
      window.location.href = "MyProfile"
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  
  setValue() {
    this.newPasswordValue=this.form.get('confirmPassword')?.value; 
  }
}

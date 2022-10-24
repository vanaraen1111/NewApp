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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public LoginForm:boolean = true;
  public forgotPasswordForm:boolean = false;

  form: FormGroup = new FormGroup({
    // fullname: new FormControl(''),
    // username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
    // ,
    // confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });
  submitted = false;


  constructor(private appComponent: AppComponent, private formBuilder: FormBuilder) { 
    appComponent.hideLoginButton();
    appComponent.routeName = "Sign-In";
    appComponent.hideMain();
    appComponent.signInFlag = true;
    appComponent.hook1 = "";
    appComponent.status = true;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        // fullname: ['', Validators.required],
        // username: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(20),
        //   ],
        // ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
         ,],
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue],
      }
      // ,
      // {
      //   validators: [Validation.match('password', 'confirmPassword')],
      // }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  toggleForm() {
    this.LoginForm = !this.LoginForm;
    this.forgotPasswordForm= !this.forgotPasswordForm;

  }

}

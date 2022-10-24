import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
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


  mockCred = {
    email: 'admin@gmail.com',
    password: 'admin1234'
  };

  public emailValue : String = '';
  public passwordValue: String= '';

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;


  constructor(private appComponent: AppComponent, private formBuilder: FormBuilder, private routingModule : AppRoutingModule) { 
    appComponent.hideLoginButton();
    appComponent.routeName = "Sign-In";
    appComponent.hideMain();
    appComponent.signInFlag = true;
    appComponent.hook1 = "";
    appComponent.status = true;
    appComponent.headerLineFlag = true;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
         ,],
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
    }
    this.setValue();
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  setValue() {
    this.emailValue=this.form.get('email')?.value; 
    this.passwordValue=this.form.get('password')?.value; 
    this.checkCredential(this.emailValue, this.passwordValue);
  }

  checkCredential(email: String, pw: String) {
    if (email === this.mockCred.email && pw === this.mockCred.password ) {
      alert ("Login success");
      //redirect to profile
      window.location.href = 'http://localhost:4200/MyProfile';
    } else {
      alert ("Invalid credentials,Login failed!");
    }
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

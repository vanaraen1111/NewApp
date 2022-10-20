import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private appComponent: AppComponent) { 
    appComponent.hideLoginButton();
    appComponent.routeName = "Sign-In";
    appComponent.hideMain();
    appComponent.signInFlag = true;
    appComponent.hook1 = "";
    appComponent.status = true;
  }

  ngOnInit(): void {
  }

}

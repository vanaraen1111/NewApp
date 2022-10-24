import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private appComponent: AppComponent) { 
    appComponent.hideLoginButton();
    appComponent.routeName = "My Profile";
    appComponent.profileFlag = true;
    appComponent.hook1 = "Change Password";
    appComponent.hook1routerLink = "/ChangePassword";
    appComponent.hook2 = "Products";
    appComponent.hook2routerLink = "/Products";
    appComponent.status = true;
    appComponent.headerLineFlag = true;
    appComponent.hideMain();
  }

  mockProfile = {
    username : 'Administrator',
    email: 'admin@gmail.com',
    password: 'admin1234'
  };

  ngOnInit(): void {
  }

}

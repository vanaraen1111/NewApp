import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticateService } from '../utils/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appComponent: AppComponent, private auth : AuthenticateService )  { 
    if (auth.authenticate(appComponent.authenticated) === true) {
    localStorage.clear();
    appComponent.hideLoginButton();
    appComponent.routeName = "Logout";
    appComponent.hideMain();
    appComponent.resetHooks();
    appComponent.status = true;
    appComponent.headerLineFlag = true;
    appComponent.authenticated = false;
    appComponent.loginButtonFlag = true;
    }
  }

  ngOnInit(): void {
  }

}

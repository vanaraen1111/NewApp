import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private appComponent: AppComponent) { 
    localStorage.clear();
    appComponent.hideLoginButton();
    appComponent.hideMain();
    appComponent.resetHooks();
    appComponent.status = true;
    appComponent.headerLineFlag = false;
    appComponent.authenticated = false;
    appComponent.loginButtonFlag = true;
    appComponent.hideSidebar();

  }

  ngOnInit(): void {
  }

}

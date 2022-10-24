import { Component } from '@angular/core';
import { GoogleService } from './google.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe, GoogleService]
})


export class AppComponent {
  title = 'GOOGLE';
  datetimelocale;
  hook1 = "";
  hook1routerLink = ""
  hook2 = "";
  hook2routerLink = ""
  hook3 = "";
  routeName = "";
 

  public mainFlag:boolean = true;
  public signInFlag:boolean = false;
  public loginButtonFlag:boolean = true;
  public logoutButtonFlag:boolean = false;
  public headerLineFlag:boolean = false;
  public profileFlag:boolean = false;
  public ariaExpanded: string = "false";
  public authenticated: Boolean = false;


  status: boolean = false;

  constructor (private datePipe: DatePipe, private googleService: GoogleService) {
    let authenticatedStr = localStorage.getItem('authenticated');
    if (authenticatedStr== undefined) {
      this.authenticated = false;
    }
    this.authenticated = authenticatedStr && JSON.parse(authenticatedStr);  

    if (this.authenticated=== true && window.location.href !== "http://localhost:4200/" && window.location.href !== "http://localhost:4200/Dashboard") {
      this.hideLoginButton();
      this.showLogoutButton();
    }

    console.log("authenticated: "+this.authenticated);

    this.datetimelocale = this.datePipe.transform(new Date(), 'dd-MM-yyyy hh:mm a');
    this.showErrorAlert();
    let api = googleService.getData();
    console.log(api);

    // var gsearch = function() {
    //   var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
    //   window.open(url, 'google');
    // };
    // var glucky = function() {
    //   var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
    //   window.open(url, 'google');
    // };
  
    // $(".left").click(gsearch);
    // $(".right").click(glucky);
  
    // $("#searchme").keypress(function(e) {
    //   if (e.which == 13) {
    //     gsearch();
    //   }
    // });

  }


  setRouteName (name: string) {
    this.routeName = name;
  }

  setActiveHook1() {
    this.ariaExpanded = "true";
  }

  hideLoginButton() {
    this.loginButtonFlag = false;
  }

  showLogoutButton() {
    this.logoutButtonFlag = true;
  }

  showErrorAlert() {
    if (window.location.href == "http://localhost:4200/") 
    Swal.fire('WARNING', 'This site is not affiliated to Google', 'error')
  }

  hideMain(){
    this.mainFlag = false;
  }

  showMain() {
    this.mainFlag = true;
  }

  resetHooks() {
    this.hook1 = "";  
    this.hook2 = "";  
    this.hook3 = "";  
  }

  routeToHome() {
    this.resetRouteName();
    this.resetHooks();
    this.hideSidebar();
    this.showMain();
    this.headerLineFlag = false;
  }

  // routeToDashboard() {
  //   this.routeName = "Dashboard";
  //   this.resetHook1();
  //   this.hideSidebar();
  //   this.showMain();
  // }

  resetRouteName() {
    this.routeName = "";
  }

  routeToSignIn() {
    this.routeName = "Sign-In";
    this.hideMain();
    this.signInFlag = true;
    this.hook1 = "";
    this.status = true;
    this.headerLineFlag = true;
  }


  //Sidebar toggle
  clickEvent(){
      this.status = !this.status;       
  }

  hideSidebar() {
    this.status = false;     
  }

  //Sidebar close

  // constructor (private google:GoogleService) {
  //   this.google.getData().subscribe (data => {
  //     console.warn(data);
  //   })
  // }
}



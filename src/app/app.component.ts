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
  public headerLineFlag:boolean = false;
  public profileFlag:boolean = false;
  
  status: boolean = false;

  constructor (private datePipe: DatePipe, private googleService: GoogleService) {
    this.datetimelocale = this.datePipe.transform(new Date(), 'dd-MM-yyyy hh:mm a');
    if (this.mainFlag == true) this.showErrorAlert();
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

  hideLoginButton() {
    this.loginButtonFlag = false;
  }

  showErrorAlert() {
    Swal.fire('WARNING', 'This site is not affiliated to Google', 'error')
  }

  hideMain(){
    this.mainFlag = false;
  }

  showMain() {
    this.mainFlag = true;
  }

  routeToHome() {
    this.resetRouteName();
    this.resetHook1();
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

  resetHook1() {
    this.hook1 = "";  
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



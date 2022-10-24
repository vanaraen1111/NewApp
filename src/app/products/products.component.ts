import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticateService } from '../utils/authenticate.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private appComponent: AppComponent, private auth : AuthenticateService ) { 
    if (auth.authenticate(appComponent.authenticated) === true) {
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
      appComponent.setRouteName("My Profile / Products");
    }

  }

  ngOnInit(): void {
  }

  goProductDetail(event: any) {
    window.location.href = "Product/"+event.target.text;
  }
}

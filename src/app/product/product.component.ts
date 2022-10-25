import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { AppComponent } from '../app.component';
import { ProductService } from '../services/product.service';
import { Product } from '../products/products.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = {
    id: null,
    name : '',
    description : '',
    image: '',
    pricerange: ''
  }
  products: Product[] = [];

  constructor(private auth : AuthenticateService, private appComponent: AppComponent, private productService: ProductService ) { 
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
    console.log(this.productService.getProduct("1").subscribe(products => this.products = products));
    this.productService.getProduct("1").subscribe(products => this.products = products);
  }

}

import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticateService } from '../services/authenticate.service';
import { ProductService } from '../services/product.service';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = {
    id: null,
    name : '',
    description : '',
    image: '',
    pricerange: ''
  }
  products: Product[] = [];
  
  constructor(private appComponent: AppComponent, private auth : AuthenticateService, private productService: ProductService ) { 
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
    console.log(this.productService.getProducts().subscribe(products => this.products = products));
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}

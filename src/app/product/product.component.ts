import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { AppComponent } from '../app.component';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/products.model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product = {
  //   id: null,
  //   name : '',
  //   description : '',
  //   image: '',
  //   pricerange: ''
  // }
  //products: Product[] = [];

  product: Product[] = [];
  id$ : Observable<string> =new Observable();
  id:string = "";

  constructor( private route: ActivatedRoute, private http: HttpClient, private auth : AuthenticateService, private appComponent: AppComponent, private productService: ProductService ) { 
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
    //this.id$ = this.route.paramMap.pipe(map((paramMap: { get: (arg0: string) => any; }) => paramMap.get('id')));
    //this.id = this.route.snapshot.paramMap.get('id');


    this.route.paramMap.subscribe(params => {
     // console.log(this.id$)
        this.productService.getProduct(1).subscribe(p =>{
          console.log(p);
          this.product = p;
      })  
      });
  }

}

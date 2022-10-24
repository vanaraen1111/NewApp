import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../utils/authenticate.service';
import { AppComponent } from '../app.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private auth : AuthenticateService, private appComponent: AppComponent ) { 
    if (auth.authenticate(appComponent.authenticated) === true) {

    }

  }

  ngOnInit(): void {
  }

}

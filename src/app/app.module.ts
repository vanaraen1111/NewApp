import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { BackendService } from "./services/backend.service";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChangepasswordComponent,
    ProductsComponent,
    ProductComponent,
    LogoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BackendService)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
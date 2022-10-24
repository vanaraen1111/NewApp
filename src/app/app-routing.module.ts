import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  {path:'Dashboard', component: DashboardComponent},
  {path:'SignIn',  component: LoginComponent},
  {path:'MyProfile',  component: ProfileComponent},
  {path:'ChangePassword',  component: ChangepasswordComponent},
  {path:'Products',   component: ProductsComponent},
  {path:'Product',  component:  ProductComponent},
  {path:'Product/:id', redirectTo: '/Product'},
  {path:'Logout',  component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [    
  DashboardComponent,
  LoginComponent,
  ProfileComponent,
  ChangepasswordComponent,
  ProductsComponent,
  ProductComponent
]

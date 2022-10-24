import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  {path:'Dashboard', component: DashboardComponent},
  {path:'SignIn', component: LoginComponent},
  {path:'MyProfile', component: ProfileComponent},
  {path:'ChangePassword', component: ChangepasswordComponent}
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
  ChangepasswordComponent
]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'register', loadChildren: () => import('./user-register/user-register.module').then(m => m.UserRegisterModule) },
 { path: 'login', loadChildren: () => import('./user-login/user-login.module').then(m => m.UserLoginModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path:"register",loadChildren:()=>import('./user-register/user-register.module').then(m=>m.UserRegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

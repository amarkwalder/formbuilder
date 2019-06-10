import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormListComponent } from './renderer/form-list/form-list.component';
import { FormDetailsComponent } from './renderer/form-details/form-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'builder',
    loadChildren: './builder/form/form.module#FormModule'
  },
  {
    path: 'form-list',
    component: FormListComponent 
  },
  {
    path: 'form-details/:_id',
    component: FormDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

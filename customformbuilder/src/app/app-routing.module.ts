import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { RendererComponent } from './renderer/renderer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'builder',
    component: BuilderComponent
  },
  {
    path: 'renderer',
    component: RendererComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

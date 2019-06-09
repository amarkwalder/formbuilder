import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { RendererComponent } from './renderer/renderer.component';

const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

import './components/CheckMatrix';
import './components/AHVNummer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuilderComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    AppRoutingModule
  ],
  providers: [
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

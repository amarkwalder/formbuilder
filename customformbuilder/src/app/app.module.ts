import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';

import { AuthConfig, AppConfig } from '../config';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FormService } from './renderer/services/form.service';
import { SelectedFormPipe } from './renderer/pipes/selected-form.pipe';
import { FormListComponent } from './renderer/form-list/form-list.component';
import { FormDetailsComponent } from './renderer/form-details/form-details.component';

import { HttpClientModule } from '@angular/common/http';

const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

import './components/CheckMatrix';
import './components/AHVNummer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectedFormPipe,
    FormListComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    FormManagerService,
    FormService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }},
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

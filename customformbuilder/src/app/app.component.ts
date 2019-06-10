import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customformbuilder';

  constructor(
    private auth: FormioAuthService,
    private router: Router,
    private resources: FormioResources
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/home']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/home']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}

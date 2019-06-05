import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'http://localhost/formio',
  apiUrl: 'http://localhost/formio',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};

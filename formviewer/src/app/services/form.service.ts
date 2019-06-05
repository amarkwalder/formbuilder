import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '../shared/form';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiURL = 'http://localhost/formio';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  

getForms(): Observable<Form> {
  return this.http.get<Form>(this.apiURL + '/form?select=_id,name,title&type=form&tags=common')
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
}

handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
  }
}
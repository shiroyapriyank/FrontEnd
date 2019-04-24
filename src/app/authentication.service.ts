import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  /* authenticate(username, password) {
    if (username === 'priyank' && password === 'priyank') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
        return false;
    }
  } */

  authenticate(loginPayLoad): Observable<any> {
   const headers = {
     Authorization: 'Basic' + btoa('my-trusted-client:secret')
       };

   let httpHeader = new HttpHeaders();
   httpHeader = httpHeader.append('Authorization', 'Basic ' + btoa('my-trusted-client:secret'));
   httpHeader = httpHeader.append('Content-Type', 'application/x-www-form-urlencoded');

   console.log(loginPayLoad);
   console.log(headers);
   return this.httpClient.post<any>('http://localhost:8080/oauth/token', loginPayLoad, {headers: httpHeader});
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName');
    console.log(!(user == null));
    return !(user = null);
  }

  logOut() {
    window.sessionStorage.removeItem('username');
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('empID');
  }
}

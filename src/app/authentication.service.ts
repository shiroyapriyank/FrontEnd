import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'priyank' && password === 'priyank') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
        return false;
    }
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}

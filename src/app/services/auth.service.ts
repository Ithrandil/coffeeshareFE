import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json',
  };

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/auth', { email, password }, this.httpOptions).pipe(
      map(jwt => {
        this.setSession(jwt);
        return jwt;
      }),
    );
  }

  private setSession(authResult) {
    localStorage.setItem('token', authResult);
  }

  logout() {
    localStorage.removeItem('token');
  }

  // public isLoggedIn() {
  //   return moment().isBefore(this.getExpiration());
  // }

  // isLoggedOut() {
  //   return !this.isLoggedIn();
  // }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }
}

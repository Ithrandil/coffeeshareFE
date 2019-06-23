import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.post<any>('http://localhost:3000/auth', { email, password }, this.httpOptions);
    // this is just the HTTP call,
    // we still need to handle the reception of the token
    // .shareReplay()
  }
}

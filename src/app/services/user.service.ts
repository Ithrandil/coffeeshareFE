import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user) {
    // TODO: remove hard coded url to env config
    return this.http.post('http://localhost:3000/users', user, httpOptions);
  }
}

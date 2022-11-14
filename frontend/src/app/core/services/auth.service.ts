import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user/user.interface';
import { environment } from 'src/environments/environment';
import httpHelpers from 'src/app/shared/helpers/httpHelpers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(user_data: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.apiUrl+'login', user_data, httpHelpers.httpHeaders())
  }

  register(user_data: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.apiUrl+'register', user_data, httpHelpers.httpHeaders())
  }

  logout() {
    return this.http.post<UserInterface>(environment.apiUrl+'logout', httpHelpers.httpHeaders())
  }

  verifyToken() {
    return this.http.get(environment.apiUrl+'verify-token', httpHelpers.httpHeaders())
  }

  get isLoggedIn(): boolean {
    let userLogged = localStorage.getItem('logged_in') ? true : false;
    return userLogged
  }

  get getUser() {
    return JSON.parse(localStorage.getItem('user') ?? '{}');
  }
}

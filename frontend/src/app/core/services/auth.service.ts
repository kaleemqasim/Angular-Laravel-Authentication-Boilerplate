import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user/user.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = localStorage.getItem('logged_in') ? true : false;
  constructor(private http: HttpClient) { }

  login() {
    
  }

  register(user_data: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.apiUrl+'register', user_data, httpOptions)
  }

  logout() {
   
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$
  }
}

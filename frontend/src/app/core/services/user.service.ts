import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import httpHelpers from 'src/app/shared/helpers/httpHelpers';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cache$: Observable<any>;
  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
    // return this.http.post<UserInterface>(environment.apiUrl+'login', user_data, httpHelpers.httpHeaders())
  // }
  getUsers() {
    if (!this.cache$) {
      this.cache$ = this.http.get(environment.apiUrl+'v1/users', httpHelpers.httpHeaders()).pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }
}

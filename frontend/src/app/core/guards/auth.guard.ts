
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // const isLoggedIn = this._authService.isLoggedIn;
      const isLoggedIn = this._authService.isLoggedIn;
      if(isLoggedIn) {
        this._authService.verifyToken().subscribe((resp) => {
          console.log('dsad',resp)
        });
      }

      console.log(isLoggedIn)
      if(isLoggedIn){
        return true;
      }else{
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import httpHelpers from 'src/app/shared/helpers/httpHelpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean = false;
  constructor(private _authService: AuthService, private router: Router) { }
  user: UserInterface['user'];
  ngOnInit(): void {
    this.user = (this._authService.getUser);
    if(!httpHelpers.emptyObject(this.user)){
      this.userLoggedIn = true;
    }
  }

  logoutUser() {
    this._authService.logout().subscribe((resp) => {
      localStorage.removeItem('logged_in');
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
      this.router.navigateByUrl("/auth/login");
    });
  }

}

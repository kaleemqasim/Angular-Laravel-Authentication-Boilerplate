import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._authService.login(this.loginForm.value).subscribe((resp) => {
      if(resp.status === 'success') {
        localStorage.setItem('logged_in', '1')
        localStorage.setItem('jwt_token', resp.authorisation?.token?.toString() ?? '')
        localStorage.setItem('user', JSON.stringify(resp.user))
        this.router.navigateByUrl("/dashboard");
      }
    })
  }

}

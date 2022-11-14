import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  // WIP
  constructor(private _authService: AuthService, private router: Router) {}

  public errors: any[] = [];

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  public errorMessage = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register() {
    let values: any = this.registerForm.value;
    console.log({values})
    
    this._authService.register(values).subscribe((resp) => {
      if(resp.status === 'success') {
        localStorage.setItem('logged_in', '1')
        localStorage.setItem('jwt_token', resp.authorisation?.token?.toString() ?? '')
        this.router.navigateByUrl("/dashboard");
      }
    })
  }

}

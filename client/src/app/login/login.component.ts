import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      this.http.post('https://localhost:44330/api/User/login', userData, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response);
          const decodedToken = this.decodeToken(response);
          console.log('Decoded token:', decodedToken);
          this.router.navigate(['/books']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

  
  private decodeToken(token: string): any{
    try{
      return JSON.parse(atob(token.split('.')[1]));
    }catch(e){
      console.error('Error decoding JWT token', e);
      return null;
    }
  }
}

import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../guards/deactivate-guard.guard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements CanComponentDeactivate {
  registrationForm!: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router
    ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Register() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;

      this.http.post<any>('https://localhost:44330/api/User/register', userData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  canDeactivate(): boolean {
    if (this.registrationForm.dirty) {
      return window.confirm(
        'You have unsaved changes. Do you really want to leave?'
      );
    }
    return true;
  }
}

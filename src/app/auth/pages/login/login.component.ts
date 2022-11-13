import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public submitted:boolean = false;
  public loginForm: FormGroup = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(2)]],
    password : ['', [Validators.required, Validators.minLength(2)]]
  });

  get f() {
    return this.loginForm.controls;
  }

  constructor( 
    private fb: FormBuilder,
    private router: Router
    ) { }

    login() {
      this.submitted = true 
      this.router.navigateByUrl('/home')
    }
}

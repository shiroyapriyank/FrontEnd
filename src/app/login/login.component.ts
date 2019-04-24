import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmpServiceService } from '../emp-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
invalidLogin = false;
loginForm: FormGroup;

constructor(private formBuilder: FormBuilder, private router: Router, private login: AuthenticationService, private http: HttpClient) { }

onSubmit() {

if (this.loginForm.invalid) {
  return;
}
const body = new HttpParams()
  .set('grant_type', 'password')
  .set('username', this.loginForm.controls.username.value)
  .set('password', this.loginForm.controls.password.value);
window.sessionStorage.setItem('username', this.loginForm.controls.username.value);
if (this.loginForm.controls.username.value === 'priyank' && this.loginForm.controls.password.value === 'priyank') {
  this.router.navigate(['home']);
} else {

this.login.authenticate(body.toString()).subscribe(data => {
  window.sessionStorage.setItem('token', JSON.stringify(data));
  console.log(window.sessionStorage.getItem('token'));
  this.router.navigate(['empHome']);
});
}
}


ngOnInit() {
  window.sessionStorage.removeItem('token');
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.required]
  });
}

}



import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
userName = 'priyank';
password = '';
constructor(private router: Router, private loginService: AuthenticationService) { }
  ngOnInit() {
  }
  checkLogin() {
    if (this.loginService.authenticate(this.userName, this.password)) {
    this.router.navigate(['home']);
    } else {
      this.router.navigate(['empHome']);
    }
  }
}

import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { auth } from  'firebase/app';
import { User } from  'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {
   }

  login(){
    this.auth.login();
  }

}

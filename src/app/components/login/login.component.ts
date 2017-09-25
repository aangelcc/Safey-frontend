import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  user: User;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.token = this.userService.token;
    this.user = this.userService.user;
    this.email = '';
    this.password = '';
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(data => {
      this.user = data.user;
      console.log("Usuario: "+this.userService.user);
      console.log("Token: "+this.userService.token);
    }, err => {console.log("Vaya! Ha habido un error")});
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(data => {
      this.router.navigateByUrl("/");
    },
      err => {console.log("Vaya! Ha habido un error")});
  }
}

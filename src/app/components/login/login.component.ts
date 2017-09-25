import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.email = '';
    this.password = '';
    this.token = 'token here';
  }

  login() {
    this.userService.login(this.email, this.password).subscribe((user) => {
      this.token = user['token'];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  personalId: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
  birthday: string;
  gender: string;

  message: string;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.personalId = '';
    this.name = '';
    this.surname = '';
    this.email = '';
    this.password = '';
    this.rePassword = '';
    this.birthday = '';
    this.gender = 'M';

    this.message = 'Message 1';
  }

  signup() {
    if (this.password === this.rePassword ) {
      this.userService.signup(this.personalId ,
        this.name,
        this.surname,
        this.email,
        this.password,
        this.birthday,
        this.gender).subscribe((response) => {
        this.message = response['message'];
      });
    }
  }
}

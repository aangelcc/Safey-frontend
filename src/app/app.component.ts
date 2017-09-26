import { Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User = null;
  constructor(private userService: UserService) {

    userService.observableUser$.subscribe(user => {this.user = user});

  }



}

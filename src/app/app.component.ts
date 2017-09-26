import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  keyword: string;
  user: User = null;
  constructor(private userService: UserService, private router: Router) {
    userService.observableUser$.subscribe(user => {this.user = user});
  }

  ngOnInit() {
    this.keyword = '';
  }

  search(page: number) {
    this.router.navigateByUrl('search/' + this.keyword + '/' + page);
  }


}

import { Injectable } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  token: string;

  constructor(public http: Http) {
    console.log('User Service Connected');
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost/api/auth/login', JSON.stringify({email: email, password: password})).map(res => res.json());
  }

  signup(personalId: string,   name: string, surname: string, email: string, password: string, birthday: string, gender: string) {
    return this.http.post('http://localhost/api/auth/register', JSON.stringify({personal_id: personalId,
      name: name,
      surname: surname,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender})).map(res => res.json());
  }
}

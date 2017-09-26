import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from "../models/user";
@Injectable()
export class UserService {

    // Where the token is saved to be used across requests
    private token: string;

    // Observable object to publish user data
    private observableUser: Subject<User>;
    observableUser$: any;

    constructor(public http: Http) {
        console.log('User Service Connected');
        this.observableUser = new Subject<User>();
        this.observableUser$ = this.observableUser.asObservable();
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost/api/auth/login', JSON.stringify({email: email, password: password}))
            .map(res => res.json())
            .do(res => {
                this.token = res.token
            })
            .do(res => {
                this.publishUser(new User(res.user.id, res.user.personal_id, res.user.name, res.user.surname, res.user.email, res.user.birthday, res.user.gender, res.user.role, res.user.created_at))
            });
    }

    signup(personalId: string, name: string, surname: string, email: string, password: string, birthday: string, gender: string) {
        return this.http.post('http://localhost/api/auth/register', JSON.stringify({
            personal_id: personalId,
            name: name,
            surname: surname,
            email: email,
            password: password,
            birthday: birthday,
            gender: gender
        })).map(res => res.json());
    }

    publishUser(user: User) {
        this.observableUser.next(user);

        // End observability
        this.observableUser.complete();
    }

}

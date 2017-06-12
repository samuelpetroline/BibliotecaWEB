import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
import { AppConfig } from '../../app.config';
import { UserService } from '../User/user.service';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig, private userService: UserService) { }
 
    login(username: string, password: string) {
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
                    this.userService.login(user);
                }
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userService.logout();
    }
}
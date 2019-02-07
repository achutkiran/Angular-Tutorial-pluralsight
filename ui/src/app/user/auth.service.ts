import { Injectable } from "@angular/core";
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser
    private apiUrl:string = environment.apiUrl;
    constructor(private http:HttpClient) { }

    loginUser(userName: string, password: string) {
        let loginInfo = {
            username: userName,
            password: password
        }
        return this.http.post(this.apiUrl+"/login",loginInfo,{
            headers: new HttpHeaders({'Content-Type':'application/json'})
        })
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(firstName: string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    fetchCurrentUserName():string {
        return this.currentUser.userName
    }
}
import { Injectable } from '@angular/core';
import { IUser } from '../user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  users: IUser[];
  private loggedUserImage = '';
  private matchedUserImage = '';
  private loggedUser: IUser;
  private matchedUser: IUser;
  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<IUser[]>('api/users');
  }

  // getUser(userName: string, password: string): Observable<IUser[]> {
  //   console.log(userName + ' ' + password.toString());
  //   // tslint:disable-next-line:max-line-length
  //   return this.http.get<IUser[]>(`api/users/?userName=^${userName}$&password=^${password}$`);
  // }
  get(id: number) {
    return this.http.get<IUser>(`api/users/?id=^${id}`);
  }

  put(user: IUser) {
    return this.http.put<IUser>('api/users/0', user);
  }

  createUser(user: IUser) {
    return this.http.post('api/users', user);
  }

  setUserImage(isLoggedUser: boolean) {
    const baseUrl = 'https://api.adorable.io/avatars/500/';
    const urlSuffix = '@adorable.io.png';
    const newImage = `${baseUrl}${Math.floor(Math.random() * 1000)}${urlSuffix}`;
    isLoggedUser ? this.loggedUserImage = newImage : this.matchedUserImage = newImage;
  }

  getUserImage(isLoggedUser: boolean): string{
    return isLoggedUser ? this.loggedUserImage : this.matchedUserImage;
  }

  setUser(user: IUser, isLoggedUser: boolean) {
    if (isLoggedUser) {
      this.loggedUser = user;
      if (this.loggedUserImage === ''){
        this.setUserImage(isLoggedUser);
      }
    } else {
      this.matchedUser = user;
      if (this.matchedUserImage === '') {
        this.setUserImage(isLoggedUser);
      }
    }
  }

  getUser(isLoggedUser: boolean): IUser {
    return isLoggedUser ? this.loggedUser : this.matchedUser;
  }

  clearUser(isLoggedUser: boolean) {
    if (isLoggedUser) {
      this.loggedUser = undefined;
      this.loggedUserImage = '';
    } else {
      this.matchedUser = undefined;
      this.matchedUserImage = '';
    }
  }

}

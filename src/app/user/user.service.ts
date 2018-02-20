import { Injectable } from '@angular/core';
import { IUser } from '../user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  users: IUser[];

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<IUser[]>('api/users');
  }

  getUser(userName: string, password: string): Observable<IUser[]> {
    console.log(userName + ' ' + password.toString());
    // tslint:disable-next-line:max-line-length
    return this.http.get<IUser[]>(`api/users/?userName=^${userName}$&password=^${password}$`);
  }

  put(user: IUser) {
    return this.http.put<IUser>('api/users/0', user);
  }

  createUser(user: IUser) {
    return this.http.post('api/users', user);
  }

}

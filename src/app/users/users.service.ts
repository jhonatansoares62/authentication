import { User } from './store/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return <Observable<User[]>>(
      this.http.get<User[]>('http://localhost:3000/users')
    );
  }

  public create(payload: User) {
    return this.http.post<User>('http://localhost:3000/users', payload);
  }

  public update(payload: User) {
    return this.http.put<User>(
      `http://localhost:3000/users/${payload.id}`,
      payload
    );
  }

  public delete(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}

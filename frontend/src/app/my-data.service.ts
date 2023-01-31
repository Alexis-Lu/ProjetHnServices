import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  public updateId: number;
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get('http://localhost:8686/getAllUsers');
  }
  getUserById(id: number) {
    return this.http.get('http://localhost:8686/getUser/' + id);
  }

  deleteUserById(id: number) {
    return this.http.delete('http://localhost:8686/deleteUser/' + id);
  }

  updateUserById(id: number, user: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.put(
      'http://localhost:8686/updateUser/' + id,
      user,
      httpOptions
    );
  }

  createUser(user: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post('http://localhost:8686/newUser', user);
  }

  getAllUserTypes() {
    return this.http.get('http://localhost:8686/getAllUserType');
  }

  getUserTypeById(id: number) {
    return this.http.get('http://localhost:8686/getUserType/' + id);
  }

  deleteUserTypeById(id: number) {
    return this.http.delete('http://localhost:8686/deleteUserType/' + id);
  }

  updateUserTypeById(id: number, user: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.put(
      'http://localhost:8686/updateUserType/' + id,
      user,
      httpOptions
    );
  }

  createUserType(user: JSON) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post('http://localhost:8686/newUserType', user);
  }
}

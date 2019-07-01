import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:51123/';
  public user:User=new User();
  
  constructor(private httpClient: HttpClient) { }
  login(name:string, password:string):Observable<Flat[]>{
    return this.httpClient.get<Flat[]>(`${this.baseUrl}login/${name}/${password}`);
 }
 register(username, password):Observable<Flat[]> {
  return this.httpClient.get<Flat[]>(`${this.baseUrl}register/${username}/${password}`);
}

loginPost(username, password) {
    this.httpClient.post(`${this.baseUrl}loginPost`, { name: username, password: password } ).subscribe((res: User) => {
      this.user = res;
    });
}
}
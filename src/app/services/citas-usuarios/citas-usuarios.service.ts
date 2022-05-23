import { Injectable, Output } from '@angular/core';
import { Users } from '../../model/users';
import { Booking } from '../../model/booking/booking';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasUsuariosService {

  private backendURL: string = "http://localhost:3030/api/v1";
  
  constructor(private httpClient: HttpClient) { }

  findAllUser(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.backendURL}/users`);
  }

  getUserById(id: number): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.backendURL}/users/${id}`);
  }

  saveUsers(user: Users): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/users`, user);
  }

  saveUserByPhone(phone: object): Observable<Object>{
    console.log("Esto es el service", phone);
    return this.httpClient.post(`${this.backendURL}/users/findByPhone`, phone);
  }




}

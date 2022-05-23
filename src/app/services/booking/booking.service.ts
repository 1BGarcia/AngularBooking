import { Injectable } from '@angular/core';
import { Booking } from '../../model/booking/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private backendURL: string = "http://localhost:3030/api/v1";

  constructor(private httpClient: HttpClient) { }

  findAllBooking(){
    return this.httpClient.get<Booking[]>(`${this.backendURL}/bookings`);
  }

  getBookingById(id: number){
    return this.httpClient.get<Booking[]>(`${this.backendURL}/bookings/${id}`);
  }

  saveBooking(booking: Booking){
    return this.httpClient.post(`${this.backendURL}/bookings`, booking);
  }

}

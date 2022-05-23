import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { BookingService } from '../services/booking/booking.service';
import { CitasUsuariosService } from '../services/citas-usuarios/citas-usuarios.service';

@Component({
  selector: 'app-listado-citas',
  templateUrl: './listado-citas.component.html',
  styleUrls: ['./listado-citas.component.css']
})
export class ListadoCitasComponent implements OnInit {

  allBooking: any
  allUser: any
  infoDataBooking = new Array();
  constructor(private users: CitasUsuariosService, private booking: BookingService) { }

  ngOnInit(): void {
    this.getAllBooking();
    this.getAllUsers();
  }

  getAllBooking(){
    this.booking.findAllBooking().subscribe(async booking =>{
      this.allBooking = booking;
    })
  }

  getAllUsers(){
    this.users.findAllUser().subscribe(async users => {
      this.allUser = users;
    })
  }

}

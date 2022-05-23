import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CitasUsuariosService } from '../services/citas-usuarios/citas-usuarios.service';
import { BookingService } from '../services/booking/booking.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-modal-registrar-citas',
  templateUrl: './modal-registrar-citas.component.html',
  styleUrls: ['./modal-registrar-citas.component.css'],
})
export class ModalRegistrarCitasComponent implements OnInit {

  fecha: any;
  startHour: any;
  fechaMd: any;

  bookingData = new FormGroup({
    phone: new FormControl(''),
    fecha: new FormControl(''),
    hora: new FormControl('')
  });
  
  constructor(public dialogRef: MatDialogRef<ModalRegistrarCitasComponent>, private toastrSvc: ToastrService, private booking: BookingService, private users: CitasUsuariosService) { }

  ngOnInit(): void {
    this.bookingData.value.fecha = this.fecha;
  }

  submitBooking(){
    this.users.saveUserByPhone({phone: this.bookingData.value.phone}).subscribe(async res =>{
      if(res != null){
        let generateBooking = {
          userId: Object.values(res)[0],
          bookingDate: new Date(this.bookingData.value.fecha+':'+this.bookingData.value.hora)
        }

        this.booking.saveBooking(generateBooking).subscribe(res => {
          console.log(res);
        });
        this.toastrSvc.success("Tu reserva se realizó correctamente");
        this.closeModal();
      }else{
        this.toastrSvc.error("Este usuario no esta registrado");
      }
    });
  }
 
  closeModal(){
    this.dialogRef.close();
  }

}

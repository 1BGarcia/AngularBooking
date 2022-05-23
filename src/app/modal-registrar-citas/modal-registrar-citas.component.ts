import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  bookingData: FormGroup;

 
  
  constructor(public dialogRef: MatDialogRef<ModalRegistrarCitasComponent>, private toastrSvc: ToastrService, private booking: BookingService, private users: CitasUsuariosService, private formBuilder: FormBuilder) {
    this.bookingData = this.formBuilder.group({
      phone: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.fecha = this.fecha;
    console.log(this.fecha);
    this.bookingData.get('fecha')?.setValue(this.fecha);
  }

  convertUTCDateToLocalDate(date: any) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
  }

  submitBooking(){
    this.users.saveUserByPhone({phone: this.bookingData.value.phone}).subscribe(async res =>{
      if(res != null){
        let generateBooking = {
          userId: Object.values(res)[0],
          bookingDate: this.convertUTCDateToLocalDate(new Date(this.bookingData.value.fecha+':'+this.bookingData.value.hora))
        }

        console.log(this.convertUTCDateToLocalDate(new Date(this.bookingData.value.fecha+':'+this.bookingData.value.hora)))

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

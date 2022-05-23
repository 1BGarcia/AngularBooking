import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ModalRegistrarCitasComponent } from './../modal-registrar-citas/modal-registrar-citas.component';
import { CitasUsuariosService } from './../services/citas-usuarios/citas-usuarios.service';

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  dateSelect: any;
  monthSelect: any = new Array();


  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalRegistrarCitasComponent, any> | undefined; 
  constructor(public matDialog: MatDialog, private userServices: CitasUsuariosService){}
  
  ngOnInit(): void{
    let date = new Date();
    this.getDaysFromData(date.getMonth()+1, date.getFullYear());
  }

  getDaysFromData(month: number, year: number){
    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month');

    this.dateSelect = startDate;
    const diffDays = endDate.diff(startDate, 'days', true)

    const numberDays = Math.round(diffDays); 
  
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any)=>{
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
    });

    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number){
    if(flag < 0){
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromData(prevDate.format("MM"), prevDate.format("YYYY"));
    }else{
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromData(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  openModal(day: any){
    const monthYear = this.dateSelect.format("YYYY-MM");
    const parse = `${monthYear}-${day.value}`;



    this.dialogConfig.id = "modal-registrar-citas";
    this.dialogConfig.height = "500px";
    this.dialogConfig.width = "650px";
    // this.dialogConfig.componentInstance.fecha = parse;
    let dialogRef:MatDialogRef<ModalRegistrarCitasComponent> = this.matDialog.open(ModalRegistrarCitasComponent, this.dialogConfig);
    dialogRef.componentInstance.fecha = parse;
  }

  closeModal(day: any){
    //Close
  }

}

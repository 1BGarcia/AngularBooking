import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CitasUsuariosService } from '../services/citas-usuarios/citas-usuarios.service';

@Component({
  selector: 'app-anadir-usuarios',
  templateUrl: './anadir-usuarios.component.html',
  styleUrls: ['./anadir-usuarios.component.css']
})
export class AnadirUsuariosComponent implements OnInit {

  userData = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl('')
  });

  allUsers: any;

  constructor(private toastrSvc: ToastrService,  private users: CitasUsuariosService) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.allUsers)
  }

  signupUsers(){
    let phone = {
      phone: this.userData.value.phone
    }

    this.saveUsers(phone);
    // Informacion a enviar
  }

  getAllUsers(){
    this.users.findAllUser().subscribe(async res =>{
      console.log(res);
      this.allUsers = res;
    })
  }

  saveUsers(phone: object){
    this.users.saveUserByPhone(phone).subscribe(async res =>{
      console.log("Esto es funcion", res);
      if(res == null){
        this.toastrSvc.success("La cita se ha realizado correctamente");
        this.users.saveUsers(this.userData.value).subscribe(async res =>{
          console.log(res);
        })
      }else{
        this.toastrSvc.error("Este usuario ya esta registrado")
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { concatWith, ConnectableObservable } from 'rxjs';

import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudUsersService } from 'src/app/services/crud-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  FormUsers:FormGroup;

  constructor(public form:FormBuilder, 
    private crudService:CrudUsersService, 
    private router:Router
    ) { 
    
    this.FormUsers=this.form.group({
      nombre:[''],
      apellido:[''],
      login:[''],
      password:['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("Me presionaron")
    console.log(this.FormUsers.value)
    this.crudService.AgregarUsuario(this.FormUsers.value).subscribe();
    this.router.navigateByUrl('list-user');
  }

}

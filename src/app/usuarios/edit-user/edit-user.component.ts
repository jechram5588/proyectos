import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudUsersService } from 'src/app/services/crud-users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  elId:any;
  FormUser:FormGroup;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudusers:CrudUsersService,
    public form:FormBuilder,
  ) { 
    this.elId =this.activeRoute.snapshot.paramMap.get('id');
    this.crudusers.ConsultarUsuario(this.elId).subscribe(resp=>{});
    
    this.FormUser=this.form.group({
      nombre:[''],
      apellido:[''],
      login:[''],
      password:['']
    });


  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudUsersService } from 'src/app/services/crud-users.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  usuario!: string;
  password!: string;

  constructor(private crudService:CrudUsersService) { }

  ngOnInit(): void {
  }


  login() {
    console.log(this.usuario);
    console.log(this.password);
    const user = {usuario: this.usuario, password: this.password};
    this.crudService.Login(user).subscribe( data => {
      
    });
  }

}

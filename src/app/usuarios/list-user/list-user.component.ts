import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CrudUsersService } from 'src/app/services/crud-users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  Usuarios: any;
  constructor(private crudUsuarios: CrudUsersService) { }

  ngOnInit(): void {

    this.crudUsuarios.ConsultarUsuarios().subscribe(resp => {
      this.Usuarios = resp;
    });
  }

  borrarRegistro(id: any, iControl: any) {
    if (window.confirm("Borrar?")) {
      this.crudUsuarios.BorrarUsuario(id).subscribe((respuesta) => {
        this.Usuarios.splice(iControl, 1);
      });
    }
  }

}

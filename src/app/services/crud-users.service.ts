import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudUsersService {
  API: string='https://localhost/proyectos/API/usuarios';
  //API: string='https://proyectos.argoss.com.mx/API/usuarios.php';
  
  constructor(private clientHttp:HttpClient) { }

  AgregarUsuario(datosUsuario:User):Observable<any>{
    //return this.clientHttp.post(this.API+"?insertar=1",datosUsuario)
    return this.clientHttp.post(this.API+"?insertar=1",datosUsuario)
  }

  ConsultarUsuarios(){
    return this.clientHttp.get(this.API)
  }

  BorrarUsuario(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id)
  }

  ConsultarUsuario(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id)
  }

  Login(user: any): Observable<any> {
    return this.clientHttp.post(this.API+"?login=1", user);
  }


}



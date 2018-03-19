import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../_services/usuario/usuario.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }

  userList: any[];

  ngOnInit() {
    this._usuarioService.getAll()
      .subscribe(
        data => {
          this.userList = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}

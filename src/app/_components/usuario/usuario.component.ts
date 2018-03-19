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
  user: any = {};

  ngOnInit() {
    this._usuarioService.getAll()
      .subscribe(
        data => {
          this.userList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );
  }

  save() {
    this._usuarioService.create(this.user).subscribe(
      data => {
        this.user = JSON.parse(data.Items);
        this.userList.push(this.user);
        this.user = {};
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(user: any) {
    this._usuarioService.delete(user.UsuarioId).subscribe(
      data => {
        this.userList.splice(this.userList.indexOf(user), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

}

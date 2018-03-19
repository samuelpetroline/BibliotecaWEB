import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../_services/emprestimo/emprestimo.service';
import { UsuarioService } from '../../_services/usuario/usuario.service';
import { LivroService } from '../../_services/livro/livro.service';
import { ExemplarService } from '../../_services/exemplar/exemplar.service';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private _emprestimoService: EmprestimoService,
              private _usuarioService: UsuarioService,
              private _exemplarService: ExemplarService,
              private _livroService: LivroService) { }

  rent: any = {};
  rentList: any[];
  userList: any[];
  exemplarList: any[];

  ngOnInit() {
    
    this._emprestimoService.getAll()
      .subscribe(
        data => {
          this.rentList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

      this._usuarioService.getAll()
      .subscribe(
        data => {
          this.userList = JSON.parse(data.Items);
          this.rent.Usuario = this.userList[0];
        },
        error => {
          console.log(error);
        }
      );

      this._exemplarService.getAll()
      .subscribe(
        data => {
          this.exemplarList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );
  }

  delete(rent) {
    this._emprestimoService.delete(rent.EmprestimoId).subscribe(
      data => {
        this.rentList.splice(this.rentList.indexOf(rent), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

  getDate(date) {
    return moment(date).format('DD-MM-YYYY');
  }

  getBooks(rent) {
    return rent.Exemplar.map(x => x.Livro.Nome).join(", ");
  }

  save() {

    var request = JSON.stringify(this.rent);
    this.rent.DataEmprestimo =  moment(this.rent.DataEmprestimo.epoc * 1000).format('YYYY-MM-DD HH:MM:ss');

    this._emprestimoService.create(this.rent).subscribe(
      data => {
        this.rent = JSON.parse(data.Items);
        this.rentList.push(this.rent);
        this.rent = {};        
      },
      error => {
        console.log(error);
      }
    )
  }

}

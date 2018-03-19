import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../_services/emprestimo/emprestimo.service';
import { IMyDpOptions } from 'mydatepicker';

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

  constructor(private _emprestimoService: EmprestimoService) { }

  rentList: any[];

  ngOnInit() {
    this._emprestimoService.getAll()
      .subscribe(
        data => {
          this.rentList = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}

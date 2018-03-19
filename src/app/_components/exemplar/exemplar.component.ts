import { Component, OnInit } from '@angular/core';
import { ExemplarService } from '../../_services/exemplar/exemplar.service';
import { LivroService } from '../../_services/livro/livro.service';

@Component({
  selector: 'exemplar',
  templateUrl: './exemplar.component.html',
  styleUrls: ['./exemplar.component.css']
})
export class ExemplarComponent implements OnInit {

  constructor(private _exemplarService: ExemplarService,
              private _livroService: LivroService) { }

  exemplar: any = {};
  exemplarList: any[];
  bookList: any[];

  ngOnInit() {
    this._exemplarService.getAll()
      .subscribe(
        data => {
          this.exemplarList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

    this._livroService.getAll()
      .subscribe(
        data => {
          this.bookList = JSON.parse(data.Items);
          this.exemplar.Livro = this.bookList[0];
        },
        error => {
          console.log(error);
        }
      );

  }

  save() {     

    this._exemplarService.create(this.exemplar)
      .subscribe(
        data => {
          this.exemplar = JSON.parse(data.Items);
          this.exemplarList.push(this.exemplar);

          this.exemplar = {};                
        },
        error => {
          console.log(error);
        }
      );
  }

  changeBook(book) {
    console.log(book);
    this.exemplar.Livro = book;

  }

  delete(exemplar: any) {
    this._exemplarService.delete(exemplar.ExemplarId).subscribe(
      data => {
        this.exemplarList.splice(this.exemplarList.indexOf(exemplar), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../_services/livro/livro.service';

@Component({
  selector: 'livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  constructor(private _livroService: LivroService) { }

  bookList: any[];

  ngOnInit() {
    this._livroService.getAll()
      .subscribe(
        data => {
          this.bookList = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}

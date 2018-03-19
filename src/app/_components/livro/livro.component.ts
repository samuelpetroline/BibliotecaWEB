import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../_services/livro/livro.service';
import { EditoraService } from '../../_services/editora/editora.service';
import { AutorService } from '../../_services/autor/autor.service';
import { AreaConhecimentoService } from '../../_services/area-conhecimento/area-conhecimento.service';

@Component({
  selector: 'livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  constructor(private _livroService: LivroService,
              private _autorService: AutorService,
              private _editoraService: EditoraService,
              private _areaConhecimentoService: AreaConhecimentoService) { }

  bookList: any[];
  authorList: any [];
  publisherList: any[];
  genreList: any[];

  book: any = {};

  ngOnInit() {
    this.book = {};
    this.book.Editoras = {};   
    this.book.Autores = {};
    this.book.Areas = {};    

    this.loadFields();
  }

  loadFields() {
    

    this._livroService.getAll()
      .subscribe(
        data => {
          this.bookList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

    this._autorService.getAll()
      .subscribe(
        data => {
          this.authorList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

      this._editoraService.getAll()
      .subscribe(
        data => {
          this.publisherList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

      this._areaConhecimentoService.getAll()
      .subscribe(
        data => {
          this.genreList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );
  }

  save() {

    //var request = JSON.stringify(this.book);

    this._livroService.create(this.book).subscribe(
      data => {
        this.book = JSON.parse(data.Items);
        this.bookList.push(this.book);

        this.book = {};
        this.book.selectedAuthors = {};
        this.book.selectedGenres = {};   
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(book: any) {
    this._livroService.delete(book.LivroId).subscribe(
      data => {
        this.bookList.splice(this.bookList.indexOf(book), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

  showAuthors(book) {
    return book.Autores.map(x => x.Nome).join(", ");
  }

  showPublishers(book) {
    return book.Editoras.map(x => x.Nome).join(", ");
  }

  showGenres(book) {
    return book.Areas.map(x => x.Descricao).join(", ");
  }

}

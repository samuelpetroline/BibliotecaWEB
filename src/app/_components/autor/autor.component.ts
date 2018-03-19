import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../_services/autor/autor.service';

@Component({
  selector: 'autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  authorList: any[];
  author: any = {};
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(private _autorService: AutorService) { }

  ngOnInit() {

    this._autorService.getAll()
      .subscribe(
        data => {
          this.authorList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

  }

  save() {
    this._autorService.create(this.author).subscribe(
      data => {
        this.author = JSON.parse(data.Items);
        this.authorList.push(this.author);
        this.author = {};
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(author: any) {
    console.log(author);
    this._autorService.delete(author.AutorId).subscribe(
      data => {        
        this.authorList.splice(this.authorList.indexOf(author), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

}

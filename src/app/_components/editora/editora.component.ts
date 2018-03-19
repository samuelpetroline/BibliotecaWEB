import { Component, OnInit } from '@angular/core';
import { EditoraService } from '../../_services/editora/editora.service';

@Component({
  selector: 'editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  constructor(private _editoraService: EditoraService) { }

  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  publisherList: any[];
  publisher: any = {};

  ngOnInit() {

    this._editoraService.getAll()
      .subscribe(
        data => {
          this.publisherList = JSON.parse(data.Items);
        },
        error => {
          console.log(error);
        }
      );

  }

  save() {
    this._editoraService.create(this.publisher).subscribe(
      data => {
        this.publisher = JSON.parse(data.Items);
        this.publisherList.push(this.publisher);
        this.publisher = {};
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(publisher: any) {
    console.log(publisher);
    this._editoraService.delete(publisher.EditoraId).subscribe(
      data => {        
        this.publisherList.splice(this.publisherList.indexOf(publisher), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

}

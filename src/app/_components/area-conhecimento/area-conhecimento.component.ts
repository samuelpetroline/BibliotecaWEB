import { Component, OnInit } from '@angular/core';
import { AreaConhecimentoService } from '../../_services/area-conhecimento/area-conhecimento.service';

@Component({
  selector: 'area-conhecimento',
  templateUrl: './area-conhecimento.component.html',
  styleUrls: ['./area-conhecimento.component.css']
})
export class AreaConhecimentoComponent implements OnInit {

  constructor(private _areaConhecimentoService: AreaConhecimentoService) { }

  genreList: any[];
  genre: any = {};
  
  ngOnInit() {

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
    this._areaConhecimentoService.create(this.genre).subscribe(
      data => {
        this.genre = JSON.parse(data.Items);
        this.genreList.push(this.genre);
        this.genre = {};
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(genre: any) {
    console.log(genre);
    this._areaConhecimentoService.delete(genre.AreaConhecimentoId).subscribe(
      data => {        
        this.genreList.splice(this.genreList.indexOf(genre), 1);
      },
      error => {
        console.log(error);
      }
    )
  }

}

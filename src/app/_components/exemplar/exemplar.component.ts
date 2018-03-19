import { Component, OnInit } from '@angular/core';
import { ExemplarService } from '../../_services/exemplar/exemplar.service';

@Component({
  selector: 'exemplar',
  templateUrl: './exemplar.component.html',
  styleUrls: ['./exemplar.component.css']
})
export class ExemplarComponent implements OnInit {

  constructor(private _exemplarService: ExemplarService) { }

  exemplarList: any[];

  ngOnInit() {
    this._exemplarService.getAll()
      .subscribe(
        data => {
          this.exemplarList = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}

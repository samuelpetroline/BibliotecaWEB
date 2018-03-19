import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { AppConfig } from '../../app.config';

@Injectable()
export class AutorService {

  private headers: Headers = new Headers();
  private options: RequestOptions;

  constructor(private http: Http, private config: AppConfig) { 
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }
    
  create(data: any) {
    return this.http.post(this.config.apiUrl + '/api/Autores', data).map((response: any) => response.json());
  }

  update(data: any) {
    return this.http.put(this.config.apiUrl + '/api/Autores', data).map((response: any) => response.json());
  }

  delete(id: number) {
    return this.http.delete(this.config.apiUrl + '/api/Autores/' + id).map((response: any) => response.json());
  }

  getById(id: number) {
    return this.http.get(this.config.apiUrl + '/api/Autores/' + id).map((response: any) => response.json());
  }

  getAll() {
    return this.http.get(this.config.apiUrl + '/api/Autores').map((response: any) => response.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 


@Injectable()
export class DatatableService {

  constructor(private http: Http) { }
  gridData() {
    // return this.http.get('../assets/data/data.json');
    return this.http.get('../assets/data/data.json')
    .map((res: Response) => res.json());
}

}

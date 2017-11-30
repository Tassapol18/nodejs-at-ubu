import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getDogs(): Observable<any> {
    return this.http.get('/api/dogs').map(res => res.json());
  }

  countDogs(): Observable<any> {
    return this.http.get('/api/dogs/count').map(res => res.json());
  }

  addDog(dog): Observable<any> {
    return this.http.post('/api/dog', JSON.stringify(dog), this.options);
  }

  getDog(dog): Observable<any> {
    return this.http.get(`/api/dog/${dog._id}`).map(res => res.json());
  }

  editDog(dog): Observable<any> {
    return this.http.put(`/api/dog/${dog._id}`, JSON.stringify(dog), this.options);
  }

  deleteDog(dog): Observable<any> {
    return this.http.delete(`/api/dog/${dog._id}`, this.options);
  }

}

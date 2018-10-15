import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

getPrefix(): Observable<any> {
    return this.http.get(this.API + '/prefix');
  }

getSex(): Observable<any> {
    return this.http.get(this.API + '/sex');
  }

getDisease(): Observable<any> {
    return this.http.get(this.API + '/disease');
  }



}

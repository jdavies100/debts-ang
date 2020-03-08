import { Injectable } from '@angular/core';
import {Person} from './dashboard/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from './constants';

@Injectable({
  providedIn: 'root'
})
export class PersonDataLoaderService {

  constructor(private http: HttpClient) { }

  loadPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${apiUrl}`);
  }
}

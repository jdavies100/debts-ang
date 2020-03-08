import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {people} from './mock-people';
import {Person} from './dashboard/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
      return {people};
  }

  genId(people: Person[]): string {
    return (people.length > 0 ? Math.max(...people.map(p => parseInt(p.id, 10))) + 1 : 1).toString();
  }

  constructor() { }
}

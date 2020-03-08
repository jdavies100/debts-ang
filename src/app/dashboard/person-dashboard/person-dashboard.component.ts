import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../interfaces';
import {PersonDataLoaderService} from '../../person-data-loader.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.css']
})
export class PersonDashboardComponent implements OnInit {

  people: Observable<Person[]>;
  selectedPerson: Person;

  constructor(private personLoader: PersonDataLoaderService) {
    this.people = personLoader.loadPeople().pipe(
      tap(v => this.selectedPerson = v[0]));
  }

  ngOnInit() {
  }

}

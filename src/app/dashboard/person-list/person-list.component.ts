import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  @Input() people: Observable<Person[]>;
  @Input() selectedPerson: Person | undefined;
  @Output() personSelected = new EventEmitter<Person>();

  selectPerson(person) {
    this.personSelected.emit(person);
  }

}

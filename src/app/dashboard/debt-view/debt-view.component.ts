import {Component, Input, OnInit} from '@angular/core';
import {Debt, Person} from '../interfaces';

@Component({
  selector: 'app-debt-view',
  templateUrl: './debt-view.component.html',
  styleUrls: ['./debt-view.component.css']
})
export class DebtViewComponent {

  @Input() selectedPerson: Person | undefined;

  calculateTotal(debts: Debt[]): number {
    let total = 0;
    debts.forEach(d => total += d.amount);
    return total;
  }
}

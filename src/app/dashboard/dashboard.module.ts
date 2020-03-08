import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PersonDashboardComponent} from './person-dashboard/person-dashboard.component';
import {PersonListComponent} from './person-list/person-list.component';
import {DebtViewComponent} from './debt-view/debt-view.component';

const routes: Routes = [
  {
    path: '',
    component: PersonDashboardComponent
  }
];

@NgModule({
  declarations: [PersonDashboardComponent,
    PersonListComponent,
    DebtViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }

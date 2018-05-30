import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { CustomerTableComponent } from './smart-table/customer-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: CustomerTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  CustomerTableComponent,
];

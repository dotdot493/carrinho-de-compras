import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadecontatosPage } from './listadecontatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadecontatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadecontatosPageRoutingModule {}

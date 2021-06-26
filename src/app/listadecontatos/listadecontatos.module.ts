import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadecontatosPageRoutingModule } from './listadecontatos-routing.module';

import { ListadecontatosPage } from './listadecontatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadecontatosPageRoutingModule
  ],
  declarations: [ListadecontatosPage]
})
export class ListadecontatosPageModule {}

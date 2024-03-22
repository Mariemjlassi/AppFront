import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { MenuJourComponent } from './menu-jour/menu-jour.component';

@NgModule({
  declarations: [
    AddMenuComponent,
    ListMenuComponent,
    MenuJourComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }

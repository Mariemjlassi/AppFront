import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PlatRoutingModule } from './plat-routing.module';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { ListPlatComponent } from './list-plat/list-plat.component';


@NgModule({
  declarations: [
    AddPlatComponent,
    ListPlatComponent
  ],
  imports: [
    CommonModule,
    PlatRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PlatModule { }

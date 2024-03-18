import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefRoutingModule } from './chef-routing.module';
import { ListChefComponent } from './list-chef/list-chef.component';


@NgModule({
  declarations: [
    ListChefComponent
  ],
  imports: [
    CommonModule,
    ChefRoutingModule
  ]
})
export class ChefModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { chefGuard } from './guard/chef.guard';

const routes: Routes = [
  {path:"",component:ListMenuComponent,canActivate:[chefGuard]},
  {path:"add" , component:AddMenuComponent,canActivate:[chefGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

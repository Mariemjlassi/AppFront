import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { chefGuard } from './guard/chef.guard';
import { etudiantGuard } from '../etudiant/guard/etudiant.guard';
import { MenuJourComponent } from './menu-jour/menu-jour.component';

const routes: Routes = [
  {path:"",component:ListMenuComponent,canActivate:[chefGuard]},
  {path:"add" , component:AddMenuComponent,canActivate:[chefGuard]},
  {path:"menuDujour",component:MenuJourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

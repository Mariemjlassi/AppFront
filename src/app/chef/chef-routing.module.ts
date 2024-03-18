import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChefComponent } from './list-chef/list-chef.component';
import { authguardGuard } from '../shared/authguard.guard';

const routes: Routes = [
  {path:'',component:ListChefComponent,canActivate:[authguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { ListPlatComponent } from './list-plat/list-plat.component';

const routes: Routes = [
  {path:"",component:ListPlatComponent},
  {path:"add",component:AddPlatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatRoutingModule { }

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes  = [
  {
    path:"menu",loadChildren:() => import('./menu/menu.module').then(m=>m.MenuModule)
  },
  {
    path:"plat",loadChildren:()=> import('./plat/plat.module').then(m=>m.PlatModule)
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

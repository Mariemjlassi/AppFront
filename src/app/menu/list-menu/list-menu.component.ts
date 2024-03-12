import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit{
  menus: any;
  constructor(private ms: MenuServiceService){}
  ngOnInit(): void {
    this.ms.getAllMenus().subscribe((data)=>{
      this.menus=data;
    })
  }

}

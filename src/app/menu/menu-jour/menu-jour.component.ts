import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';

@Component({
  selector: 'app-menu-jour',
  templateUrl: './menu-jour.component.html',
  styleUrls: ['./menu-jour.component.css']
})
export class MenuJourComponent implements OnInit{
  menu : any;
  constructor(private ms: MenuServiceService){}
  ngOnInit(): void {
    this.ms.getMenuDuJour().subscribe((data)=>{
     this.menu=data;
     console.log(data);
    })
  }
  
}

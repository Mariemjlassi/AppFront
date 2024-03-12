import { Component, OnInit } from '@angular/core';
import { PlatServiceService } from '../service/plat-service.service';
import { MenuServiceService } from 'src/app/menu/service/menu-service.service';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  plats: any;
  constructor(private ps:PlatServiceService){}
  ngOnInit(): void {
    this.ps.getAllPlats().subscribe(data=>{
      this.plats=data;
    })
  }
 
}

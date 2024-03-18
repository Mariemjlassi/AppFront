import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit{
  menus: any;
  constructor(private ms: MenuServiceService,private router:Router){}
  ngOnInit(): void {
    this.ms.getAllMenus().subscribe((data)=>{
      this.menus=data;
    })
  }

  logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('userRole')
    this.router.navigate(['/login']);
  }

}

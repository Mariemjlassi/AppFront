import { Component } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  menuForm: any;
  constructor(private menuService:MenuServiceService,private fb:FormBuilder,private router:Router){
    this.menuForm=this.fb.group({
      date : ['',Validators.required],
      dessert : ['',Validators.required],
      supplement : ['',Validators.required],
      descriptionPlat : ['',Validators.required],
      qteDisponible : ['',Validators.required],
    });
  }

  fnaddMenu(){
    this.menuService.createMenu(this.menuForm.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/menu'])
    })
  }
}

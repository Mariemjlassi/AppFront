import { Component, OnInit } from '@angular/core';
import { PlatServiceService } from '../service/plat-service.service';
import { MenuServiceService } from 'src/app/menu/service/menu-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  platForm!: FormGroup;
  menus:any;
  selectedMenuId !: any;

  constructor(private ps:PlatServiceService,private ms:MenuServiceService, private fb : FormBuilder){}


  ngOnInit(): void {
    this.ms.getAllMenus().subscribe((data)=>{
      this.menus=data;
    });
    this.platForm = this.fb.group({
      description: ['', Validators.required],
      dessert: ['', Validators.required],
      qteDisponible: ['', Validators.required],
      menuId: ['', Validators.required]
    });
  }

  onMenuSelected(event: any) {
    this.selectedMenuId = event.target.value;
  }
  

  addPlatToMenu() {
    if (this.platForm.invalid) {
      console.error('fromulaire invalide');
      return;
    }

    const plat = {
      description: this.platForm.get('description')!.value,
      dessert: this.platForm.get('dessert')!.value,
      qteDisponible: this.platForm.get('qteDisponible')!.value,
      menuId: this.selectedMenuId
    };

    this.ps.addPlat(this.selectedMenuId,plat).subscribe(
      (response) => {
        console.log('Plat added successfully', response);
        
        this.platForm.reset();
      },
      (error) => {
        console.error('Error adding plat', error);
      }
    );
  }

  
}

import { Component } from '@angular/core';
import { SignupRequest } from '../AuthService/model/signup-request';
import { AuthService } from '../AuthService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerRequest: any = {};
   

  constructor(private authService:AuthService) {}
  signupEtudiant(){
    this.authService.registerStudent(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for student:',response);
      },
      error =>{
        console.error('signup error for student:',error);
      }
    )
  }

  signupChef(){
    this.authService.registerChef(this.registerRequest).subscribe(
      response=>{
        console.log('Signup successful for Chef:',response);
      },
      error =>{
        console.error('signup error for Chef:',error);
      }
    )
  }
}

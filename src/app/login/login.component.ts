import { Component } from '@angular/core';
import { AuthService } from '../AuthService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginRequest).subscribe(
      response => {
        console.log('Token:',  response.jwt);
        localStorage.setItem('jwt',response.jwt);
        localStorage.setItem('userRole', response.userRole);
        console.log('Login successful:', response);
        // Rediriger l'utilisateur vers une page appropriée après la connexion réussie
        
      },
      error => {
        console.error('Login error:', error);
        // Gérer les erreurs de connexion (afficher un message d'erreur, réinitialiser le formulaire, etc.)
      }
    );
  }
}

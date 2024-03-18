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
       
        console.log('Login successful:', response);
        localStorage.setItem('jwt',response.jwt);
        const userRole = localStorage.getItem('userRole');
        console.log('User role:', userRole);
        // Rediriger l'utilisateur vers une page appropriée après la connexion réussie
        
      },
      error => {
        console.error('Login error:', error);
        // Gérer les erreurs de connexion (afficher un message d'erreur, réinitialiser le formulaire, etc.)
      }
    );
  }
}

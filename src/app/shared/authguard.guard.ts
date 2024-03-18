import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice= inject(AuthService);
  if (authservice.isAuthenticated()) {
    const userRole = localStorage.getItem('userRole');
    console.log('User role:', userRole);
    // Vérifie le rôle de l'utilisateur et permet l'accès en fonction du rôle
    if (userRole === 'ETUDIANT') {
      return true;
    }
    if (userRole === 'CHEF') {
      router.navigate(['/chef']);
      return true;
      
    }
    if (userRole === 'ADMIN') {
      return true;
    }
    
    return false;
  } else {
    // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    router.navigate(['/login']);
    return false;
  }
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authservice= inject(AuthService);
  if (authservice.isAuthenticated()) {
    const userRole = localStorage.getItem('userRole');
    // Vérifie le rôle de l'utilisateur et permet l'accès en fonction du rôle
    if (userRole === 'ETUDIANT') {
      // Autorise l'accès aux interfaces étudiantes
      router.navigate(['/etudiant']); // Remplacez '/etudiant' par le chemin de votre interface étudiante
      return true;
    }
    if (userRole === 'CHEF') {
      // Autorise l'accès aux interfaces chef
      router.navigate(['/chef']); // Remplacez '/chef' par le chemin de votre interface chef
      return true;
    }
    if (userRole === 'ADMIN') {
      // Autorise l'accès aux interfaces administrateur
      router.navigate(['/admin']); // Remplacez '/admin' par le chemin de votre interface administrateur
      return true;
    }
    // Redirige vers une page d'erreur orouter.navigate(['/access-denied']);
    return false;
  } else {
    // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    router.navigate(['/login']);
    return false;
  }
};

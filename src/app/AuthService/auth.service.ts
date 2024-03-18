import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:9092/";

  constructor(private http: HttpClient) { }

  registerStudent(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'ETUDIANT';
    const url = this.baseUrl + 'signup/etudiant';
    return this.http.post(url, SignupRequest);
  }

  registerChef(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'CHEF';
    const url = this.baseUrl + 'signup/chef';
    return this.http.post(url, SignupRequest);
  }

  registerAdmin(SignupRequest: any): Observable<any> {
    SignupRequest.role= 'ADMIN';
    const url = this.baseUrl + 'signup/admin';
    return this.http.post(url, SignupRequest);
  }
  login(loginRequest: any): Observable<any> {
    return this.http.post(this.baseUrl+"login", loginRequest);
  }

  saveTokenAndRole(token: string, role: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
  }
  

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return new HttpHeaders();
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('jwt') != null;
  }
}

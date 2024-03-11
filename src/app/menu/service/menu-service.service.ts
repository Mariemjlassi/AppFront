import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private baseUrl = 'http://localhost:9091/menus';
  constructor(private http:HttpClient) { }

  getAllMenus(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }

  createMenu(menu:any){
    return this.http.post<any>(this.baseUrl,menu);
  }
}

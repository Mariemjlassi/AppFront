import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private baseUrl = 'http://localhost:9092/api/menus';
  private baseURL='http://localhost:9092/menuDujour'
  constructor(private http:HttpClient,private auths:AuthService) { }
  headers=this.auths.createAuthorizationHeader();

    getMenuDuJour(){
      return this.http.get<any>(this.baseURL,{ headers :this.headers!});
    }
  getAllMenus(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  createMenu(menu:any){
    return this.http.post<any>(this.baseUrl,menu, { headers :this.headers!});
  }
  updateMenu(id: number, menu:any){
    return this.http.put(`${this.baseUrl}/${id}`, menu,{ headers :this.headers!});
  }

  deleteMenu(id:any){
    return this.http.delete(this.baseUrl+"/"+id,{ headers :this.headers!});
  }
  getMenuById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }
}

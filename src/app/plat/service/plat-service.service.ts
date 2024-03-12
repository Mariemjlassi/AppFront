import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatServiceService {
baseUrl = "http://localhost:9091/plats";
  constructor(private http:HttpClient) { }

  getAllPlats():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }

  addPlat(menuId:number,plat : any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/${menuId}`, plat);
  }
}

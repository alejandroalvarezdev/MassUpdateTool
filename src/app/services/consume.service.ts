import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http: HttpClient) { }

  fetchData(criteria: any, module: any): Observable<any> {
    const url = `http://localhost:3000/api/zoho/${criteria}/${module}`; // Corrección en la interpolación de la URL
    return this.http.get(url); // Realiza la solicitud GET a la API
}


  massiveUpdate(module:any,data: any): Observable<any> {
    let url = 'http://localhost:3000/api/zoho/MassiveUpdate/'+module;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(url, JSON.stringify(data), { headers });
};

  singleUpdate(module:any,data: any): Observable<any> {
    
    let url = `http://localhost:3000/api/zoho/SinglePost/${module}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(data), { headers });

  }
  upsertRecord(module:any,data:any){
    let url = `http://localhost:3000/api/zoho/SinglePost/${module}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(data), { headers });
  }

  tagRecord(){
    
  }

}

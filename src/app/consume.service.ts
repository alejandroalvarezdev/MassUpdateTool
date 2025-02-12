import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http: HttpClient) { }

  fetchData(id:any): Observable<any> {
    console.log(id); 
    let url= 'http://localhost:3000/api/zoho/leads/'+id ;
    return this.http.get(url); // replace with your API endpoint
    
  };

  massiveUpdate(module:any,data: any): Observable<any> {
    let url = 'http://localhost:3000/api/zoho/MassiveUpdate/'+module;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(url, JSON.stringify(data), { headers });
};

}

import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  baseServerURL = "http://localhost:9001/inventoryms/";

  httpHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  httpOptionsJSON = { headers: this.httpHeadersJSON, withCredentials: true, reportProgress: true};


  
  



  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    var request: Observable<HttpEvent<any>> = this.http.post<HttpEvent<any>>(this.baseServerURL + "/api/inventory/stockitem/update/addimage",
                                                  formData, this.httpOptionsJSON);

    
    return request;
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseServerURL}/files`);
  }

}

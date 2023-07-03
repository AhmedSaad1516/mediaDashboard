import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getDataHome(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/get-all-table-count')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  constructor(private http:HttpClient) { }

  getAllCosts(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/get-costs')
  }

  updateCosts(model:any ,id:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/edit-cost/' +id , model)

  }
}

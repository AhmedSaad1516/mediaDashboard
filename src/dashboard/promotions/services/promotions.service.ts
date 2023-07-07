import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http:HttpClient) { }
  GetAllPromotions(){
    return this.http.get('https://socialmedia.erp-everest.com/api/promotions')
  }

  deleteSinglePromotions(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/promotions/'+id)

  }

  showSingelPromotion(id:any){
    return this.http.get('https://socialmedia.erp-everest.com/api/promotions/'+id)

  }
}

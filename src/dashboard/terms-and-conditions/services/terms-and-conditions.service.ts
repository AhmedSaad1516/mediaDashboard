import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsAndConditionsService {

  constructor(private http:HttpClient) { }

  getTermsAndConditions(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/terms-and-conditions')
  }
 AddTermsAndConditions(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/terms-and-conditions',model)
  }
  deleteermsAndConditions(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/terms-and-conditions/'+id)
  }
 upadteteermsAndConditions(model:any,id:any){
    return this.http.put('https://socialmedia.erp-everest.com/api/admin/terms-and-conditions/'+id,model)
  }
}

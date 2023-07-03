import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyAndPrivacyService {

  constructor(private http:HttpClient) { }

  getPolicyAndpPrivacy(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/policy-and-privacy')
  }
 AddPolicyAndpPrivacy(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/policy-and-privacy',model)
  }
  deletePolicyAndpPrivacy(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/policy-and-privacy/'+id)
  }
 upadtePolicyAndpPrivacy(model:any,id:any){
    return this.http.put('https://socialmedia.erp-everest.com/api/admin/policy-and-privacy/'+id,model)
  }
}

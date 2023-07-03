import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getDataProfile(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/profile')
  }
  changePassword(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/change-password',model)

  }
  editProfile(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/updateProfile',model)

  }
}

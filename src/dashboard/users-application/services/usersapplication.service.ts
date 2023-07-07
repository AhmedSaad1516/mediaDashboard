import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersapplicationService {

  constructor(private http:HttpClient) { }

  showAllUsers(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/all-users')
  }
  
 

  showDetalisUserApplication(id:any){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/all-data/'+id)

  }
 deleteUsers(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/delete-user/'+id)

  }
  deletePosts(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/delete-post/'+id)
  }
  deleteGroups(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/delete-group/'+id)
  }

  getStatus(id:any){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/active/'+id)

  }
}

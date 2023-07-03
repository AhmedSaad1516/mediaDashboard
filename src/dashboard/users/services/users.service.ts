import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  createUsers(modle:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/users',modle)
  }
  updateUsers(modle:any,id:any,){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/update-users/' +id , modle)
  }  
  getAllUsers(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/all-employee')

  }
  showDetalisUser(id:any){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/show-user/'+id)

  }

 deleteUsers(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/delete-user/'+id)

  }

  showAllRoles(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/roles')

  }
}

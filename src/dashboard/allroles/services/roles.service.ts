import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  getAllRoles(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/roles')
  }

  createRole(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/admin/roles',model)
  }
  deleteRole(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/admin/roles/'+id)
  }
  showPermissions(){
    return this.http.get('https://socialmedia.erp-everest.com/api/admin/permissions')

  }
}

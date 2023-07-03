import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private http:HttpClient) { }

  createInterest(modle:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/store-interests',modle)
  }
  updateInterest(modle:any,id:any,){
    return this.http.post('https://socialmedia.erp-everest.com/api/update-interests/' +id , modle)
  }  
  getInterest(){
    return this.http.get('https://socialmedia.erp-everest.com/api/get-interests')

  }

 deleteInterest(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/delete-interests/'+id)

  }

}

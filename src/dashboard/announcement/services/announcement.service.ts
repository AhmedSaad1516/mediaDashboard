import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http:HttpClient) { }

  creatAannouncement(model:any){
    return this.http.post('https://socialmedia.erp-everest.com/api/create/announcement',model)
  }
updateAannouncement(modle:any,id:any){
  return this.http.post('https://socialmedia.erp-everest.com/api/update/announcement/' +id , modle)

}
  deleteAannouncement(id:any){
    return this.http.delete('https://socialmedia.erp-everest.com/api/delete/announcement/'+id)
  }

  getAnnouncement(){
    return this.http.get('https://socialmedia.erp-everest.com/api/announcement')

  }
}

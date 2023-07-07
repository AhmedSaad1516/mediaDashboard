import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  getAllContactUs(){
    return this.http.get('https://socialmedia.erp-everest.com/api/contact-us')
  }
}

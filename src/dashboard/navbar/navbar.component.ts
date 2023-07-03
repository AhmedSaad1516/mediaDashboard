import { Component } from '@angular/core';
import { ProfileService } from '../profile/services/profile.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data:any={}
  constructor(
 private serv:ProfileService,
 private router:Router
) { }
   
 ngOnInit(): void {

  this.getProfile()
}


  getProfile(){
    this.serv.getDataProfile().subscribe((data:any)=>{
      this.data=data.data
    })
   }

   logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')

   }
}

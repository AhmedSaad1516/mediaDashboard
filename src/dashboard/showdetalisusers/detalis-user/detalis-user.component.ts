import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/dashboard/users/services/users.service';

@Component({
  selector: 'app-detalis-user',
  templateUrl: './detalis-user.component.html',
  styleUrls: ['./detalis-user.component.css']
})
export class DetalisUserComponent {
  img:boolean=false
users:any={}
id:any

  
  constructor(
   private serv:UsersService,private route:ActivatedRoute,
    private toaster:ToastrService
   ) { 

    this.id=this.route.snapshot.paramMap.get('id')
   }
    
  ngOnInit(): void {
this.getDetalisUsers()


  }
  
  getDetalisUsers(){
    this.serv.showDetalisUser(this.id).subscribe(
      (data:any) =>{
      this.users=data.data
      
  
  
    })
  }
}

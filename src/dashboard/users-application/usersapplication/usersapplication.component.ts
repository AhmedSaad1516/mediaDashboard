import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AddusersComponent } from 'src/dashboard/addusers/addusers/addusers.component';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { UsersService } from 'src/dashboard/users/services/users.service';
import { UsersapplicationService } from '../services/usersapplication.service';

@Component({
  selector: 'app-usersapplication',
  templateUrl: './usersapplication.component.html',
  styleUrls: ['./usersapplication.component.css']
})
export class UsersapplicationComponent {

  showModel:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  users:any[]=[]

  dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(
   private serv:UsersapplicationService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getUsers()

  }
  
  getUsers(){
    this.img=true
    this.serv.showAllUsers().subscribe(
      (data:any) =>{
      this.users=data.data
      this.img=false
      this.dtTrigger.next("");
    
    
  
    },error=>{
      this.img=false
    })

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  openForm(){
       
    const dialogRef = this.dialog.open(AddusersComponent, {
     width:'750px',
     height:'60%',
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
           this.getUsers()
           } 
       });
      }
  
  
      updateinterestss(element:any){
       
    const dialogRef = this.dialog.open(AddusersComponent, {
     width:'750px',
     height:'60%',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
          this.getUsers()
         }
       });
      }
     

  
  deleteInterest(id:any){
    this.img=true
  this.serv.deleteUsers(id).subscribe((data:any)=>{
    this.toaster.success('Interests deleted successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.ngOnDestroy()
    this.getUsers()
    this.img=false
  },error =>{
    this.img=false
  
  })
  }
  
 
}

import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { AddusersComponent } from 'src/dashboard/addusers/addusers/addusers.component';
import { Subject } from 'rxjs';
import * as $ from 'jquery';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  showModel:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  users:any[]=[]

  dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();
  id:any
  constructor(
   private serv:UsersService,
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
    this.serv.getAllUsers().subscribe(
      (data:any) =>{
      this.users=data.data
      this.dtTrigger.next("");

      this.img=false
  
    },error =>{
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
          this.getUsers()
          this.ngOnDestroy()

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
     
  openDelete(id:any){
this.id=id
  }
  
  deleteInterest(id:any){
    this.img=true
  this.serv.deleteUsers(this.id).subscribe((data:any)=>{
    this.toaster.success('Employee deleted successfully','',{
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

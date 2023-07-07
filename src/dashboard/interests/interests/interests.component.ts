import { Component ,OnInit } from '@angular/core';
import { InterestsService } from '../services/interests.service';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AddinterestsComponent } from 'src/dashboard/addinterests/addinterests/addinterests.component';
import { Subject } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit   {

showModel:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]

dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();

constructor(
 private serv:InterestsService,
  private toaster:ToastrService,public dialog: MatDialog
 ) { }
  
ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength:10,
    searching:true
  };

this.getAllInterests()

}


openForm(){
     
  const dialogRef = this.dialog.open(AddinterestsComponent, {
   width:'400px',
   height:'400px',
   disableClose : true
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
        this.ngOnDestroy()
         this.getAllInterests()
         } 
     });
    }


    updateinterestss(element:any){
     
  const dialogRef = this.dialog.open(AddinterestsComponent, {
   width:'500px',
   height:'450px',
   disableClose : true,
   data:element
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
        this.ngOnDestroy()
        this.getAllInterests()
       }
     });
    }
   
getAllInterests(){
  this.img=true
  this.serv.getInterest().subscribe(
    (data:any) =>{
    this.interests=data.data
    this.dtTrigger.next(null);
    this.img=false

  },error=>{
    this.img=false
  })
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
deleteInterest(id:any){
  this.img=true
this.serv.deleteInterest(id).subscribe((data:any)=>{
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
  this.getAllInterests()
  this.img=false
},error =>{
  this.img=false

})
}





}

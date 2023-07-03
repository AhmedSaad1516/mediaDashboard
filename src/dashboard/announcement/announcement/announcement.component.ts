import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AnnouncementService } from '../services/announcement.service';
import { AddannouncementComponent } from 'src/dashboard/addannouncement/addannouncement/addannouncement.component';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
showModel:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
announcement:any[]=[]
dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();

constructor(
 private serv:AnnouncementService,
  private toaster:ToastrService,public dialog: MatDialog
 ) { }
  
ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength:10,
    searching:true
  };

this.getAllAnnouncement()

}


openForm(){
     
  const dialogRef = this.dialog.open(AddannouncementComponent, {
   width:'750px',
   height:'60%',
   disableClose : true
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
        this.ngOnDestroy()
         this.getAllAnnouncement()
         } 
     });
    }


    updateAnnouncement(element:any){
     
  const dialogRef = this.dialog.open(AddannouncementComponent, {
   width:'750px',
   height:'60%',
   disableClose : true,
   data:element
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result == true){
        this.ngOnDestroy()
        this.getAllAnnouncement()
       }
     });
    }
   

    getAllAnnouncement(){
      this.img=true
  this.serv.getAnnouncement().subscribe(
    (data:any) =>{
    this.announcement=data.data
  
    this.img=false
    this.dtTrigger.next(null);
  },error=>{
    this.img=false
  })
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}

deleteAnnouncement(id:any){
  this.img=true
this.serv.deleteAannouncement(id).subscribe((data:any)=>{
  this.toaster.success('Announcement deleted successfully','',{
    timeOut:2000,
    progressBar:true,
    closeButton:true
  })
  let audio = new Audio
  audio.src='../../../assets/notification-sound/login.wav'
  audio.load()
  audio.play()
  this.ngOnDestroy()
  this.getAllAnnouncement()
  this.img=false
},error =>{
  this.img=false

})
}


}

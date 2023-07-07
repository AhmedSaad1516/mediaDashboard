import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AddinterestsComponent } from 'src/dashboard/addinterests/addinterests/addinterests.component';
import { Subject } from 'rxjs';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { TermsAndConditionsService } from '../services/terms-and-conditions.service';
import { AddtermsAndConditionsComponent } from 'src/dashboard/addterms-and-conditions/addterms-and-conditions/addterms-and-conditions.component';
declare var $: any;

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  showModel:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  termsandconditions:any[]=[]
  
  dtOptions: DataTables.Settings = {};
  filter:any=[]
    dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(
   private serv:TermsAndConditionsService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getAllTermsAndConditions()
  
  }
  
  
  openForm(){
       
    const dialogRef = this.dialog.open(AddtermsAndConditionsComponent, {
     width:'600px',
     height:'400px',
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
           this.getAllTermsAndConditions()
           } 
       });
      }
  
  
      updateTermsAndConditions(element:any){
       
    const dialogRef = this.dialog.open(AddtermsAndConditionsComponent, {
      width:'600px',
      height:'400px',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
          this.getAllTermsAndConditions()
         }
       });
      }
     
  getAllTermsAndConditions(){
    this.img=true
    this.serv.getTermsAndConditions().subscribe(
      (data:any) =>{
      this.termsandconditions=data[0]
      this.img=false
      this.dtTrigger.next(null);
  
  
    },error =>{
      this.img=false
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  deleteTermsAndConditions(id:any){
    this.img=true
  this.serv.deleteermsAndConditions(id).subscribe((data:any)=>{
    this.toaster.success('Terms and conditions deleted successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.ngOnDestroy()
    this.getAllTermsAndConditions()
    this.img=false
  },error =>{
    this.img=false
  
  })
  }
  
  
  
  
}

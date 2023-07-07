import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  MatDialog } from '@angular/material/dialog';
import { AddinterestsComponent } from 'src/dashboard/addinterests/addinterests/addinterests.component';
import { Subject } from 'rxjs';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { AddtermsAndConditionsComponent } from 'src/dashboard/addterms-and-conditions/addterms-and-conditions/addterms-and-conditions.component';
import { TermsAndConditionsService } from 'src/dashboard/terms-and-conditions/services/terms-and-conditions.service';
import { PolicyAndPrivacyService } from '../services/policy-and-privacy.service';
import { AddpolicyAndPrivacyComponent } from 'src/dashboard/addpolicy-and-privacy/addpolicy-and-privacy/addpolicy-and-privacy.component';
declare var $: any;

@Component({
  selector: 'app-policy-and-privacy',
  templateUrl: './policy-and-privacy.component.html',
  styleUrls: ['./policy-and-privacy.component.css']
})
export class PolicyAndPrivacyComponent {
  showModel:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  policy:any[]=[]
  
  dtOptions: DataTables.Settings = {};
  filter:any=[]
    dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(
   private serv:PolicyAndPrivacyService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getAllPolicyAndPrivacy()
  
  }
  
  
  openForm(){
       
    const dialogRef = this.dialog.open(AddpolicyAndPrivacyComponent, {
      width:'600px',
      height:'400px',
     disableClose : true
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
           this.getAllPolicyAndPrivacy()
           } 
       });
      }
  
  
      updatepolicyAndPrivacy(element:any){
       
    const dialogRef = this.dialog.open(AddpolicyAndPrivacyComponent, {
      width:'600px',
      height:'400px',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
          this.getAllPolicyAndPrivacy()
         }
       });
      }
     
      getAllPolicyAndPrivacy(){
        this.img=true
    this.serv.getPolicyAndpPrivacy().subscribe(
      (data:any) =>{
      this.policy=data[0]
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

  deleteTermsAndConditions(id:any){
    this.img=true
  this.serv.deletePolicyAndpPrivacy(id).subscribe((data:any)=>{
    this.toaster.success('Policy and privacy deleted successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.ngOnDestroy()
    this.getAllPolicyAndPrivacy()
    this.img=false
  },error =>{
    this.img=false
  
  })
  }
  
  
}

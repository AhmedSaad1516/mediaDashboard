import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditprofileComponent } from 'src/dashboard/editprfile/editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  changePasswordForm!:FormGroup

  data:any={}
  visible:boolean = true;
changetype:boolean =true;
visiblee:boolean = true;
changetypee:boolean =true;
visibleee:boolean = true;
changetypeee:boolean =true;
img:boolean=false
photoName :any
url :any= "";
  constructor(
    private fb:FormBuilder,
    private serv:ProfileService,
    private toaster:ToastrService,
    public dialog: MatDialog

    ) { }
     
   ngOnInit(): void {
    this.createForm()
    this.getProfile()
 }


 createForm(){
  this.changePasswordForm=this.fb.group({
    current_password:['',Validators.required],
    new_password:['',Validators.required],
    new_password_confirmation:['',Validators.required]
  })
 }

 updatePasweord(){
  this.img=true
  this.serv.changePassword(this.changePasswordForm.value).subscribe((data:any)=>{
    this.toaster.success('Password updated successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.img=false
  },error =>{
    this.img=false
  })
 }

 getProfile(){
  this.serv.getDataProfile().subscribe((data:any)=>{
    this.data=data.data
  })
 }
editProfile(element:any){

     
    const dialogRef = this.dialog.open(EditprofileComponent, {
     width:'750px',
     height:'60%',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
           this.getProfile()
           } 
       });
     
}
 viewpass(){
  this.visible = !this.visible;
  this.changetype = !this.changetype;
}

viewpasss(){
  this.visiblee = !this.visiblee;
  this.changetypee = !this.changetypee;
}
viewpassss(){
  this.visibleee = !this.visibleee;
  this.changetypeee = !this.changetypeee;
}
}

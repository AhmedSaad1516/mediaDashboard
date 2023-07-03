import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { ProfileService } from 'src/dashboard/profile/services/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  formEdit!:FormGroup

show:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]
constructor(
  private fb:FormBuilder,private serv:ProfileService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<EditprofileComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createFormEdit()


}
createFormEdit(){
  this.formEdit=this.fb.group({
    name:[this.data?.name || ''],
    photo:[this.data?.photo || ''],
   
  })
 }


   
selectPhoto(event:any){
  this.photoName=event.target.value
  this.formEdit.get('photo')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}
}


updateDataProfile(){
  this.img=true
  let model=this.creatFoemData()
  this.serv.editProfile(model).subscribe((data:any)=>{
    this.toaster.success('Profile updated successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.img=false
    this.dialog.close(true)
  },error =>{
    this.img=false
  })
 }



 creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formEdit.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

close(){
  this.matDialog.closeAll()
}
}

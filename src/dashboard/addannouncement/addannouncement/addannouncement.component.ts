import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { AnnouncementService } from 'src/dashboard/announcement/services/announcement.service';

@Component({
  selector: 'app-addannouncement',
  templateUrl: './addannouncement.component.html',
  styleUrls: ['./addannouncement.component.css']
})
export class AddannouncementComponent {
  formAnnouncement!:FormGroup
show:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]
constructor(
  private fb:FormBuilder,private serv:AnnouncementService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<AddannouncementComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createForm()


}
createForm(){
  this.formAnnouncement=this.fb.group({
    title:[this.data?.title ||'',Validators.required],
    photo:[this.data?.photo || '',Validators.required],
    content:[this.data?.content || '',Validators.required]
  })
}


   
selectPhoto(event:any){
  this.photoName=event.target.value
  this.formAnnouncement.get('photo')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}
}

addAnnouncement(){
  this.img=true
  let modle=this.creatFoemData()
this.serv.creatAannouncement(modle).subscribe((data:any)=>{
this.toaster.success('Announcement added successfully','',{
  timeOut:2000,
  progressBar:true,
  closeButton:true
})
let audio = new Audio
audio.src='../../../assets/notification-sound/login.wav'
audio.load()
audio.play()
this.show=false
this.img=false
this.formAnnouncement.reset()
this.dialog.close(true)
},error =>{
  this.showError=true
  this.img=false
})
}

update(){
  this.img=true
  let modle=this.creatFoemData()
  this.serv.updateAannouncement(modle,this.data.id).subscribe((data:any)=>{
    this.toaster.success('Announcement updated successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.show=false
    this.img=false
    this.dialog.close(true)
    this.formAnnouncement.reset()
  },error=>{
    this.showError=true
    this.img=false
  })
}


creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formAnnouncement.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

close(){
  this.matDialog.closeAll()
}
}

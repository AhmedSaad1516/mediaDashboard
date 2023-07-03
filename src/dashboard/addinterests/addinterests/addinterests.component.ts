import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';

@Component({
  selector: 'app-addinterests',
  templateUrl: './addinterests.component.html',
  styleUrls: ['./addinterests.component.css']
})
export class AddinterestsComponent {
  forminterests!:FormGroup
show:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]
constructor(
  private fb:FormBuilder,private serv:InterestsService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<AddinterestsComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createForm()


}
createForm(){
  this.forminterests=this.fb.group({
    name:[this.data?.name ||'',Validators.required],
    icon:[this.data?.icon_url || '',Validators.required]
  })
}


   
selectPhoto(event:any){
  this.photoName=event.target.value
  this.forminterests.get('icon')?.setValue(event.target.files[0])

if(event.target.files[0]){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = (event:any)=>{
this.url = event.target.result
} 
}
}

addInterests(){
  this.img=true
  let modle=this.creatFoemData()
this.serv.createInterest(modle).subscribe((data:any)=>{
this.toaster.success('Interests added successfully','',{
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
this.forminterests.reset()
this.dialog.close(true)
},error =>{
  this.showError=true
  this.img=false
})
}

update(){
  this.img=true
  let modle=this.creatFoemData()
  this.serv.updateInterest(modle,this.data.id).subscribe((data:any)=>{
    this.toaster.success('Interests updated successfully','',{
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
    this.forminterests.reset()
  },error=>{
    this.showError=true
    this.img=false
  })
}


creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.forminterests.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

close(){
  this.matDialog.closeAll()
}
}

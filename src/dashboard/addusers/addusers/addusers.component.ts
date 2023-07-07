import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { AnnouncementService } from 'src/dashboard/announcement/services/announcement.service';
import { UsersService } from 'src/dashboard/users/services/users.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  formUser!:FormGroup
show:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]
visible:boolean = true;
changetype:boolean =true;
visiblee:boolean = true;
changetypee:boolean =true;
roles:any[]=[]
constructor(
  private fb:FormBuilder,private serv:UsersService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<AddusersComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createForm()
this.getAllRoles()

}
createForm(){
  this.formUser=this.fb.group({
    name:[this.data?.title ||'',Validators.required],
    email:[this.data?.photo || '',[Validators.required,Validators.email]],
    password:[this.data?.content || '',Validators.required],
    password_confirmation:[this.data?.content || '',Validators.required],
    role:[this.data?.content || '',Validators.required]
  })
}


   

addUsers(){
  this.img=true
  let modle=this.creatFoemData()
this.serv.createUsers(modle).subscribe((data:any)=>{
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

this.formUser.reset()
this.dialog.close(true)
this.img=false
},error =>{
  this.showError=true
  this.img=false
})
}

update(){
  this.img=true
  let modle=this.creatFoemData()
  this.serv.updateUsers(modle,this.data.id).subscribe((data:any)=>{
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
    this.formUser.reset()
  },error=>{
    this.showError=true
    this.img=false
  })
}


creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formUser.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

close(){
  this.matDialog.closeAll()
}
  
viewpass(){
  this.visible = !this.visible;
  this.changetype = !this.changetype;
}

viewpasss(){
  this.visiblee = !this.visiblee;
  this.changetypee = !this.changetypee;
}

getAllRoles(){
  this.serv.showAllRoles().subscribe((data:any)=>{
    this.roles=data.original.roles.data
  })
}
}

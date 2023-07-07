import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { AnnouncementService } from 'src/dashboard/announcement/services/announcement.service';
import { UsersService } from 'src/dashboard/users/services/users.service';
import { CostsService } from 'src/dashboard/costs/services/costs.service';

@Component({
  selector: 'app-update-costs',
  templateUrl: './update-costs.component.html',
  styleUrls: ['./update-costs.component.css']
})
export class UpdateCostsComponent {
  formCosts!:FormGroup
img:boolean=false

constructor(
  private fb:FormBuilder,private serv:CostsService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<UpdateCostsComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createForm()

}
createForm(){
  this.formCosts=this.fb.group({
    cost:[this.data?.cost ||'',Validators.required]
  })
}

creatFoemData(){
  let newdata = new FormData()
  Object.entries(this.formCosts.value).forEach(([key , value]:any)=>{
    newdata.append(key, value)
  })
  return newdata
}

close(){
  this.matDialog.closeAll()
}
update(){
  this.img=true
  let model= this.creatFoemData()
  this.serv.updateCosts(model , this.data.id).subscribe((data:any)=>{
this.toaster.success('Costs updated successfully','',{
  progressBar:true,
  timeOut:2000,
  closeButton:true
})
this.img=false
let audio = new Audio
audio.src='../../../assets/notification-sound/login.wav'
audio.load()
audio.play()
this.dialog.close(true)

  },error =>{
    this.img=false

  })
}
}




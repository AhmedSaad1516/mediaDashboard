import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { TermsAndConditionsService } from 'src/dashboard/terms-and-conditions/services/terms-and-conditions.service';

@Component({
  selector: 'app-addterms-and-conditions',
  templateUrl: './addterms-and-conditions.component.html',
  styleUrls: ['./addterms-and-conditions.component.css']
})
export class AddtermsAndConditionsComponent {
  formTermsAndConditions!:FormGroup
show:boolean=false
photoName :any
url :any= "";
img:boolean=false
showError:boolean=false
interests:any[]=[]
constructor(
  private fb:FormBuilder,private serv:TermsAndConditionsService, @Inject(MAT_DIALOG_DATA) public data:any,
  private toaster:ToastrService,public dialog: MatDialogRef<AddtermsAndConditionsComponent>,
  public matDialog: MatDialog
 ) { }
  
ngOnInit(): void {

this.createForm()


}
createForm(){
  this.formTermsAndConditions=this.fb.group({
    title:[this.data?.title ||'',Validators.required],
    content:[this.data?.content || '',Validators.required]
  })
}


   


addTermsAndConditions(){
  this.img=true
  
this.serv.AddTermsAndConditions(this.formTermsAndConditions.value).subscribe((data:any)=>{
this.toaster.success('Terms and conditions added successfully','',{
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
this.formTermsAndConditions.reset()
this.dialog.close(true)
},error =>{
  this.showError=true
  this.img=false
})
}

updateTermsAndConditions(){
  this.img=true
  
  this.serv.upadteteermsAndConditions(this.formTermsAndConditions.value,this.data.id).subscribe((data:any)=>{
    this.toaster.success('Terms and conditions updated successfully','',{
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
    this.formTermsAndConditions.reset()
  },error=>{
    this.showError=true
    this.img=false
  })
}




close(){
  this.matDialog.closeAll()
}
}

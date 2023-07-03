import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { TermsAndConditionsService } from 'src/dashboard/terms-and-conditions/services/terms-and-conditions.service';
import { PolicyAndPrivacyService } from 'src/dashboard/policy-and-privacyt/services/policy-and-privacy.service';

@Component({
  selector: 'app-addpolicy-and-privacy',
  templateUrl: './addpolicy-and-privacy.component.html',
  styleUrls: ['./addpolicy-and-privacy.component.css']
})
export class AddpolicyAndPrivacyComponent {
  formpdatepolicyAndPrivacy!:FormGroup
  show:boolean=false
  photoName :any
  url :any= "";
  img:boolean=false
  showError:boolean=false
  interests:any[]=[]
  constructor(
    private fb:FormBuilder,private serv:PolicyAndPrivacyService, @Inject(MAT_DIALOG_DATA) public data:any,
    private toaster:ToastrService,public dialog: MatDialogRef<AddpolicyAndPrivacyComponent>,
    public matDialog: MatDialog
   ) { }
    
  ngOnInit(): void {
  
  this.createForm()
  
  
  }
  createForm(){
    this.formpdatepolicyAndPrivacy=this.fb.group({
      title:[this.data?.title ||'',Validators.required],
      content:[this.data?.content || '',Validators.required]
    })
  }
  
  
     
  
  
  addupdatepolicyAndPrivacy(){
    this.img=true
    
  this.serv.AddPolicyAndpPrivacy(this.formpdatepolicyAndPrivacy.value).subscribe((data:any)=>{
  this.toaster.success('Policy and privacy added successfully','',{
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
  this.formpdatepolicyAndPrivacy.reset()
  this.dialog.close(true)
  },error =>{
    this.showError=true
    this.img=false
  })
  }
  
  updatepdatepolicyAndPrivacy(){
    this.img=true
    
    this.serv.upadtePolicyAndpPrivacy(this.formpdatepolicyAndPrivacy.value,this.data.id).subscribe((data:any)=>{
      this.toaster.success('Policy and privacy updated successfully','',{
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
      this.formpdatepolicyAndPrivacy.reset()
    },error=>{
      this.showError=true
      this.img=false
    })
  }
  
  
  
  
  close(){
    this.matDialog.closeAll()
  }
}

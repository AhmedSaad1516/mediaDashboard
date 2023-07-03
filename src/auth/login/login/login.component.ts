import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm!:FormGroup
  showError:boolean=false
  img:boolean=false
  visible:boolean = true;
  changetype:boolean =true;
  constructor(private fb :FormBuilder,private serv:LoginService,private rouer:Router,
    private toaster :ToastrService
    ) { } 

      ngOnInit(): void {

        this.creatForm()
      }
      creatForm(){
        this.LoginForm=this.fb.group({
          email:['',[Validators.required]],
          password:['',[Validators.required]]
        }) 
      }

      login(){
        this.img=true
  let model = this.createFormData()
  this.serv.login(model).subscribe((data:any)=>{
    localStorage.setItem('token' ,data.data.token)
    this.rouer.navigateByUrl('/home')
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.toaster.success('Logged in successfully','',{
      progressBar:true,
      timeOut:4000,
      closeButton:true
    })
    this.img=false
  }, error =>{
    this.showError=true
  
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.img=false
  })
      }

      createFormData(){
        let newdata = new FormData()

        Object.entries(this.LoginForm.value).forEach(([key , value]:any)=>{
          newdata.append(key , value)
        })
        return newdata
      }
      
      viewpass(){
        this.visible = !this.visible;
        this.changetype = !this.changetype;
      }
}

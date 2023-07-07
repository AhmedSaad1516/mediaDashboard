import { Component } from '@angular/core';
import { ProfileService } from '../profile/services/profile.service';
import { Route, Router } from '@angular/router';
import Pusher from 'pusher-js';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data:any={}
  notifyarray:any[]=[]
  notifyarrayPhoto:any[]=[]
  counter:any=0
  last:any=0
  constructor(
 private serv:ProfileService,
 private router:Router,private toaster:ToastrService
) { }
   
 ngOnInit(): void {

  Pusher.logToConsole = true;

  var pusher = new Pusher('d129b24e1dc77dee1b34',{
    cluster: 'eu',
  });
  
  const channell = pusher.subscribe('contactUs');
  channell.bind('contactUs', (data:any) =>{
    let audio= new Audio()
    audio.src="../../../../assets/notification-sound/notification-sound-7062 (1).mp3"
    audio.load()
    audio.play()

    if(JSON.parse(localStorage.getItem('notifications')!)){
      this.counter=JSON.parse(localStorage.getItem('notifications')!).length
      this.notifyarray=JSON.parse(localStorage.getItem('notifications')!)
      console.log(this.counter);
 
      
    }else{
      this.notifyarray=[];
      this.counter=0;
      
    }
    if(JSON.parse(localStorage.getItem('counter')!)>=0){
      this.last=JSON.parse(localStorage.getItem('counter')!)
   this.last++
               localStorage.setItem("counter",JSON.stringify(this.last))

    }
   
           
          // localStorage.setItem("counter",JSON.stringify(this.last))
    // if(JSON.parse(localStorage.getItem('counter')!)){
    //   this.last=JSON.parse(localStorage.getItem('counter')!)
    //   this.last++
    //   localStorage.setItem("counter",JSON.stringify(this.last))

    // }

    this.toaster.success('New notification','',{
      progressBar:true,
      timeOut:2000,
      closeButton:true
    })
    this.notifyarray[this.counter++]=data
    // this.notify.push(data.message)
    console.log(this.notifyarray);
    
    localStorage.setItem('notifications' ,JSON.stringify(this.notifyarray))

    return this.notifyarray

  
});

// Define your notification pusher data
const notificationPusherData = {
  title: 'New Notification',
  message: 'You have a new notification!'
};

// Write the data to a file




  // localStorage.setItem('notification', (this.notify))
// console.log(this.notify);
this.last=JSON.parse(localStorage.getItem('counter')!)

  this.notifyarray =JSON.parse(localStorage.getItem('notifications')!);
  console.log(this.notifyarray);










    this.getProfile()
}


  getProfile(){
    this.serv.getDataProfile().subscribe((data:any)=>{
      this.data=data.data
    })
   }

   logout(){
    localStorage.clear()
    this.router.navigateByUrl('/login')

   }

   move(index:number){
    this.last=0
    localStorage.setItem("counter",JSON.stringify(this.last))
  
  }
  moveNumber(index:number){
    // splice  ديه مسؤله علي المسح
    this.notifyarray.splice (index , 1)
   
    localStorage.setItem("notifications",JSON.stringify(this.notifyarray))

  } 

}

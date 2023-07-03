import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { UsersapplicationService } from 'src/dashboard/users-application/services/usersapplication.service';
import { UsersService } from 'src/dashboard/users/services/users.service';

@Component({
  selector: 'app-showdetalis',
  templateUrl: './showdetalis.component.html',
  styleUrls: ['./showdetalis.component.css']
})
export class ShowdetalisComponent {
  img:boolean=false
  postss:any[]=[]
id:any
dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();
  show:boolean=false
  constructor(
   private serv:UsersapplicationService,private route:ActivatedRoute,
    private toaster:ToastrService
   ) { 

    this.id=this.route.snapshot.paramMap.get('id')
   }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
this.getDetalisUsers()


  }
  
  getDetalisUsers(){
    this.serv.showDetalisUserApplication(this.id).subscribe(
      (data:any) =>{
        if(data.data.posts==0){
          this.show=true
        }else{
          this.postss=data.data.posts
          this.dtTrigger.next("");
    
      console.log( this.postss);
        }
   
  
  
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deletePost(id:any){
    this.img=true
    this.serv.deletePosts(id).subscribe((data:any)=>{
      this.toaster.success('Post deleted successfully','',{
        timeOut:2000,
        progressBar:true,
        closeButton:true
      })
      let audio = new Audio
      audio.src='../../../assets/notification-sound/login.wav'
      audio.load()
      audio.play()
      this.ngOnDestroy()
      this.getDetalisUsers()
      this.img=false
    },error =>{
      this.img=false
    })
  }
}

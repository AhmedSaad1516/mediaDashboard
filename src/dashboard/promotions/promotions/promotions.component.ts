import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddinterestsComponent } from 'src/dashboard/addinterests/addinterests/addinterests.component';
import { Subject } from 'rxjs';
import { InterestsService } from 'src/dashboard/interests/services/interests.service';
import { PromotionsService } from '../services/promotions.service';
declare var $: any;

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {

  showModel:boolean=false
  img:boolean=false
  promotions:any[]=[]
  dtOptions: DataTables.Settings = {};
  filter:any=[]
    dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(
   private serv:PromotionsService,
    private toaster:ToastrService
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getPromotions()
  
  }
  
  getPromotions(){
    this.img=true
    this.serv.GetAllPromotions().subscribe(
      (data:any) =>{
      this.promotions=data.data
      
      this.img=false
      this.dtTrigger.next(null);
    },error=>{
      this.img=false
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  deletePromotions(id:any){
    this.img=true
  this.serv.deleteSinglePromotions(id).subscribe((data:any)=>{
    this.toaster.success('Interests deleted successfully','',{
      timeOut:2000,
      progressBar:true,
      closeButton:true
    })
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.ngOnDestroy()
    this.getPromotions()
    this.img=false
  },error =>{
    this.img=false
  
  })
}
}

  


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { PromotionsService } from 'src/dashboard/promotions/services/promotions.service';
import { UsersapplicationService } from 'src/dashboard/users-application/services/usersapplication.service';

@Component({
  selector: 'app-show-propromotioncustomer',
  templateUrl: './show-propromotioncustomer.component.html',
  styleUrls: ['./show-propromotioncustomer.component.css']
})
export class ShowPropromotioncustomerComponent {
  img:boolean=false
  postss:any=[]
id:any
dtOptions: DataTables.Settings = {};
filter:any=[]
  dtTrigger:Subject<any>=new Subject<any>();
  show:boolean=false
  constructor(
   private serv:PromotionsService,private route:ActivatedRoute,
   ) { 

    this.id=this.route.snapshot.paramMap.get('id')
   }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
this.getDetalisPromotions()

  }
  
  getDetalisPromotions(){
    this.serv.showSingelPromotion(this.id).subscribe(
      (data:any) =>{
        if(data.data.posts==0){
          this.show=true
        }else{
          this.postss=data.data
          this.dtTrigger.next(null);
          this.ngOnDestroy()
    
        }
   
  
  
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.getDetalisPromotions()
    this.dtTrigger.unsubscribe();

  }

}

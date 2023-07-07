import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ContactUsService } from '../services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact:any[]=[]
  img:boolean=false
  dtOptions: DataTables.Settings = {};
  filter:any=[]
    dtTrigger:Subject<any>=new Subject<any>();
  constructor(
   private serv:ContactUsService,
    private toaster:ToastrService
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getContact()
  }
  
  getContact(){
    this.img=true
    this.serv.getAllContactUs().subscribe(
      (data:any) =>{
      this.contact=data.data
      this.dtTrigger.next(null);
      this.img=false
  
    },error=>{
      this.img=false
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

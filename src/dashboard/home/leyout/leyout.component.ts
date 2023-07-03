import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-leyout',
  templateUrl: './leyout.component.html',
  styleUrls: ['./leyout.component.css']
})
export class LeyoutComponent {
  data:any={}
  constructor(private serv:HomeService) { 
 
     
    }
     
   ngOnInit(): void {
   this.getData()
   }

   getData(){
    this.serv.getDataHome().subscribe((data:any)=>{
      this.data=data.data
    })
   }
}

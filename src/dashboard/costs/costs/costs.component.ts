import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { CostsService } from '../services/costs.service';
import { MatDialog } from '@angular/material/dialog';
import { AddinterestsComponent } from 'src/dashboard/addinterests/addinterests/addinterests.component';
import { UpdateCostsComponent } from 'src/dashboard/update-costs/update-costs/update-costs.component';


@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent {
  costs:any[]=[]
  img:boolean=false
  dtOptions: DataTables.Settings = {};
  filter:any=[]
    dtTrigger:Subject<any>=new Subject<any>();
  constructor(
   private serv:CostsService,
    private toaster:ToastrService,public dialog: MatDialog
   ) { }
    
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true
    };
  
  this.getCost()
  }
  
  getCost(){
    this.img=true
    this.serv.getAllCosts().subscribe((data:any) =>{
      this.costs=data.data
      this.img=false
      this.dtTrigger.next(null);

    },error=>{
      this.img=false
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updatCosts(element:any){
       
    const dialogRef = this.dialog.open(UpdateCostsComponent, {
     width:'350px',
     height:'280px',
     disableClose : true,
     data:element
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result == true){
          this.ngOnDestroy()
            this.getCost()
         }
       });
      }
}

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../../shared/common/common.service';
import { TitleCasePipe } from '@angular/common';
import { AllRoutes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-base-ui',
  imports: [RouterModule,TitleCasePipe],
  templateUrl: './base-ui.html',
  styleUrl: './base-ui.scss'
})
export class BaseUi {
AllRoutes=AllRoutes
page='';
constructor(private router:Router,private common:CommonService){
  this.common.page.subscribe((res:any)=>{
    this.page=res;
    this.page=this.page.replace("ui","");
    this.page=this.page.replaceAll("-"," ");
  })
}
}

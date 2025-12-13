import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllRoutes } from '../../../shared/routes/routes';
import { CommonService } from '../../../shared/common/common.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-charts',
  imports: [RouterModule,TitleCasePipe],
  templateUrl: './charts.html',
  styleUrl: './charts.scss'
})
export class Charts {
AllRoutes=AllRoutes
page='';
constructor(private common:CommonService){
  this.common.page.subscribe((res:any)=>{
    this.page=res;
    this.page=this.page.replace("charts","");
    this.page=this.page.replaceAll("-"," ");
  })
}
}

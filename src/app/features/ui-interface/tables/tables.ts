import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AllRoutes } from '../../../shared/routes/routes';
import { CommonService } from '../../../shared/common/common.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tables',
  imports: [RouterModule,TitleCasePipe],
  templateUrl: './tables.html',
  styleUrl: './tables.scss'
})
export class Tables {
  AllRoutes=AllRoutes
  page='';
  constructor(private common:CommonService){
    this.common.page.subscribe((res:any)=>{
      this.page=res;
      this.page=this.page.replace("ui","");
      this.page=this.page.replaceAll("-"," ");
    })
  }
}

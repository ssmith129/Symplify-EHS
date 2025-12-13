import { Component } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-icons',
  imports: [RouterModule,TitleCasePipe],
  templateUrl: './icons.html',
  styleUrl: './icons.scss'
})
export class Icons {
AllRoutes=AllRoutes
page='';
constructor(private common:CommonService){
  this.common.page.subscribe((res:any)=>{
    this.page=res;
    this.page=this.page.replace("icon","");
    this.page=this.page.replaceAll("-"," ");
  })
}
}

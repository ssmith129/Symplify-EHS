import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { CommonService } from '../../../shared/common/common.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [RouterModule,TitleCasePipe],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  AllRoutes=AllRoutes
  base='';
  page='';
  last='';
  constructor(private router:Router,private common:CommonService){
    this.common.page.subscribe((res:any)=>{
      this.page=res;
      this.page=this.page.replace("ui","");
      this.page=this.page.replaceAll("-"," ");
    }),
    this.common.last.subscribe((res:any)=>{
      this.last=res;
      this.last=this.last.replaceAll("-"," ");
      if(this.last === 'form basic inputs' || this.last === 'form checkbox radios' || this.last === 'form input groups'
        || this.last === 'form grid gutters' || this.last === 'form mask' || this.last === 'form fileupload'
      ){
        this.page = this.last
        this.page = this.page.replace("form"," ");
      }
    })
    
  }

}

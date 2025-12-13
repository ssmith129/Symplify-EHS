import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  imports: [CommonModule],
  templateUrl: './form-wizard.html',
  styleUrl: './form-wizard.scss'
})
export class FormWizard {
  basicwizard:number=1;
  progresswizard:number=1;

basicnext():void{
  if(this.basicwizard<3){
    this.basicwizard++;
  }
}
basicprev():void{
if(this.basicwizard>1){
  this.basicwizard--;
}
}
basicstart():void{
  this.basicwizard=1;
}
basicend():void{
  this.basicwizard=3;
}
progressnext():void{
  if(this.progresswizard<3){
    this.progresswizard++;
  }
}
progressprev():void{
if(this.progresswizard>1){
  this.progresswizard--;
}
}
progressstart():void{
  this.progresswizard=1;
}
progressend():void{
  this.progresswizard=3;
}
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllRoutes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  imports: [RouterLink,CommonModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss'
})
export class ChangePassword {
AllRoutes =  AllRoutes
password:boolean[]=[false];
togglePassword(i:number):void{
  this.password[i]=!this.password[i];
}
}

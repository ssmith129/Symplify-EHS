import { Component } from '@angular/core';
import { AllRoutes } from '../../shared/routes/routes';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
AllRoutes =  AllRoutes
password:boolean[]=[false];
togglePassword(i:number):void{
  this.password[i]=!this.password[i];
}
constructor(private router:Router){}
pageRedirect():void{
  this.router.navigate([AllRoutes.login])
}
}

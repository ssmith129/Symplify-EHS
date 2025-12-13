import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AllRoutes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  AllRoutes=AllRoutes;
  password:boolean[]=[false];
  togglePassword(i:number):void{
    this.password[i]=!this.password[i];
  }
  constructor(private router:Router){}
pageRedirect():void{
  this.router.navigate([AllRoutes.index])
}
}

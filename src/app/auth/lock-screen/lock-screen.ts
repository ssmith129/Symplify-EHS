import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllRoutes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lock-screen',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './lock-screen.html',
  styleUrl: './lock-screen.scss'
})
export class LockScreen {
AllRoutes = AllRoutes;
constructor(private router:Router){}
password:boolean[]=[false];
togglePassword(i:number):void{
  this.password[i]=!this.password[i];
}
onSubmit(){
    this.router.navigate([AllRoutes.index]);
}
}
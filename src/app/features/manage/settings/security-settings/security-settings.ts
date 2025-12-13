import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security-settings',
  imports: [CommonModule,RouterLink],
  templateUrl: './security-settings.html',
  styleUrl: './security-settings.scss'
})
export class SecuritySettings {
AllRoutes=AllRoutes
password:boolean[]=[false];
togglePassword(i:number):void{
  this.password[i]=!this.password[i];
}
}

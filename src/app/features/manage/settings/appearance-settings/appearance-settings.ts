import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../../shared/routes/routes';


@Component({
  selector: 'app-appearance-settings',
  imports: [MatSelectModule,CommonModule,FormsModule],
  templateUrl: './appearance-settings.html',
  styleUrl: './appearance-settings.scss'
})
export class AppearanceSettings {
AllRoutes=AllRoutes
theme:string='light'
themes(theme:string):void{
this.theme=theme
}
}

import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { AllRoutes } from '../../../../shared/routes/routes';


@Component({
  selector: 'app-general-settings',
  imports: [MatSelectModule,CommonModule],
  templateUrl: './general-settings.html',
  styleUrl: './general-settings.scss'
})
export class GeneralSettings {
AllRoutes=AllRoutes
}

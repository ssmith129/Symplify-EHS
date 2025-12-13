import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllRoutes } from '../../../../../shared/routes/routes';

@Component({
  selector: 'app-patient-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.scss'
})
export class PatientDetails {
AllRoutes=AllRoutes
}

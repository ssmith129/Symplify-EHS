import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-medical-history',
  imports: [CommonModule,RouterLink],
  templateUrl: './patient-details-medical-history.html',
  styleUrl: './patient-details-medical-history.scss'
})
export class PatientDetailsMedicalHistory {
AllRoutes=AllRoutes
}

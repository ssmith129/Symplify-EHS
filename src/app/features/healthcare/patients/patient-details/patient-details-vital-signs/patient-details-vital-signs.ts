import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-vital-signs',
  imports: [CommonModule,RouterLink],
  templateUrl: './patient-details-vital-signs.html',
  styleUrl: './patient-details-vital-signs.scss'
})
export class PatientDetailsVitalSigns {
AllRoutes=AllRoutes
}

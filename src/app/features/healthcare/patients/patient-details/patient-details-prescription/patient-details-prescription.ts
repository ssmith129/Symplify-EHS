import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-prescription',
  imports: [RouterLink],
  templateUrl: './patient-details-prescription.html',
  styleUrl: './patient-details-prescription.scss'
})
export class PatientDetailsPrescription {
AllRoutes=AllRoutes
}

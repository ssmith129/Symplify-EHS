import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-patient-details-insurance',
  imports: [RouterLink],
  templateUrl: './patient-details-insurance.html',
  styleUrl: './patient-details-insurance.scss'
})
export class PatientDetailsInsurance {
  AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-lab-results',
  imports: [RouterLink],
  templateUrl: './patient-details-lab-results.html',
  styleUrl: './patient-details-lab-results.scss'
})
export class PatientDetailsLabResults {
AllRoutes=AllRoutes
}

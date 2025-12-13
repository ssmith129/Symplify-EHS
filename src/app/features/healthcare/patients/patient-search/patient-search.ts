import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-search',
  imports: [RouterLink],
  templateUrl: './patient-search.html',
  styleUrl: './patient-search.scss'
})
export class PatientSearch {
AllRoutes=AllRoutes
}

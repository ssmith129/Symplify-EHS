import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  imports: [RouterLink],
  templateUrl: './doctor-details.html',
  styleUrl: './doctor-details.scss'
})
export class DoctorDetails {
AllRoutes=AllRoutes
}

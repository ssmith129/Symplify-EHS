import { Component } from '@angular/core';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-patient-details-documents',
  imports: [RouterLink],
  templateUrl: './patient-details-documents.html',
  styleUrl: './patient-details-documents.scss'
})
export class PatientDetailsDocuments {
  AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [RouterLink],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.scss'
})
export class TermsAndConditions {
AllRoutes = AllRoutes;
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
AllRoutes = AllRoutes;
}

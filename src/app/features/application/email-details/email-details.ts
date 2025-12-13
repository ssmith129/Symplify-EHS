import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-email-details',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './email-details.html',
  styleUrl: './email-details.scss'
})
export class EmailDetails {
  AllRoutes=AllRoutes
}

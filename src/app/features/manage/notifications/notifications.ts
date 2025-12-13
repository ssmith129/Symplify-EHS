import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllRoutes } from '../../../shared/routes/routes';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-notifications',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss'
})
export class Notifications {
AllRoutes=AllRoutes
}

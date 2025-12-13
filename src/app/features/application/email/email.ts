import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-email',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './email.html',
  styleUrl: './email.scss'
})
export class Email {
AllRoutes=AllRoutes
}

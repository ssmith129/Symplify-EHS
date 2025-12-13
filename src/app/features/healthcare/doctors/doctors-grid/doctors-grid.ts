import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-doctors-grid',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './doctors-grid.html',
  styleUrl: './doctors-grid.scss'
})
export class DoctorsGrid {
AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-doctors-list',
  imports: [RouterModule,MatTooltipModule],
  templateUrl: './doctors-list.html',
  styleUrl: './doctors-list.scss'
})
export class DoctorsList {
AllRoutes=AllRoutes
}

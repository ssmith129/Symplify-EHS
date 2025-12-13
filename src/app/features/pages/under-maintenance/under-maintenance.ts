import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-maintenance',
  imports: [RouterLink],
  templateUrl: './under-maintenance.html',
  styleUrl: './under-maintenance.scss'
})
export class UnderMaintenance {
AllRoutes = AllRoutes;
}

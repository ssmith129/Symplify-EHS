import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllRoutes } from '../../shared/routes/routes';

@Component({
  selector: 'app-error-500',
  imports: [RouterModule],
  templateUrl: './error-500.html',
  styleUrl: './error-500.scss'
})
export class Error500 {
AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../shared/routes/routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [RouterModule],
  templateUrl: './error-404.html',
  styleUrl: './error-404.scss'
})
export class Error404 {
AllRoutes=AllRoutes
}

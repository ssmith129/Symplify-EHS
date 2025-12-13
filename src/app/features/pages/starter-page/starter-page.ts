import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starter-page',
  imports: [RouterLink],
  templateUrl: './starter-page.html',
  styleUrl: './starter-page.scss'
})
export class StarterPage {
AllRoutes = AllRoutes;
}

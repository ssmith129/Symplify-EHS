import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-links',
  imports: [RouterLink],
  templateUrl: './ui-links.html',
  styleUrl: './ui-links.scss'
})
export class UiLinks {
AllRoutes=AllRoutes
}

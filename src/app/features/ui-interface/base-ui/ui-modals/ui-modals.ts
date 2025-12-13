import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllRoutes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-ui-modals',
  imports: [RouterLink],
  templateUrl: './ui-modals.html',
  styleUrl: './ui-modals.scss'
})
export class UiModals {
AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { AllRoutes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-settings',
  imports: [RouterModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {
AllRoutes=AllRoutes
}

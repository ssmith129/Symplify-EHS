import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-requests',
  imports: [RouterLink],
  templateUrl: './requests.html',
  styleUrl: './requests.scss'
})
export class Requests {
AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllRoutes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-user-permissions-settings',
  imports: [RouterLink],
  templateUrl: './user-permissions-settings.html',
  styleUrl: './user-permissions-settings.scss'
})
export class UserPermissionsSettings {
AllRoutes=AllRoutes
}

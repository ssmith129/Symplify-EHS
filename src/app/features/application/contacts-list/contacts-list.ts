import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-contacts-list',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.scss'
})
export class ContactsList {
AllRoutes=AllRoutes
}

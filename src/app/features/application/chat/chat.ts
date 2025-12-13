import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-chat',
  imports: [RouterLink,MatTooltipModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {
  AllRoutes=AllRoutes
}

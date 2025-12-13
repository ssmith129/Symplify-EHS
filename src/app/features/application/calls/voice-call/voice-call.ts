import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voice-call',
  imports: [RouterLink],
  templateUrl: './voice-call.html',
  styleUrl: './voice-call.scss'
})
export class VoiceCall {
  AllRoutes=AllRoutes
}

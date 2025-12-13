import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-file-manager',
  imports: [RouterLink],
  templateUrl: './file-manager.html',
  styleUrl: './file-manager.scss'
})
export class FileManager {
  AllRoutes=AllRoutes
}

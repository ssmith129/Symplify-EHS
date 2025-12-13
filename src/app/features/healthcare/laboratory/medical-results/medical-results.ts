import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medical-results',
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './medical-results.html',
  styleUrl: './medical-results.scss'
})
export class MedicalResults {
AllRoutes=AllRoutes
}

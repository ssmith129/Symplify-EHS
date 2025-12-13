import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllRoutes } from '../../../../shared/routes/routes';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-lab-results',
  imports: [CommonModule,RouterModule,MatTooltipModule],
  templateUrl: './lab-results.html',
  styleUrl: './lab-results.scss'
})
export class LabResults {
AllRoutes=AllRoutes
}

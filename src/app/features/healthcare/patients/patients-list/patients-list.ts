import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-patients-list',
  imports: [CommonModule,MatSelectModule,FormsModule,RouterModule,RouterLink,MatTooltipModule],
  templateUrl: './patients-list.html',
  styleUrl: './patients-list.scss'
})
export class PatientsList {
AllRoutes=AllRoutes
}

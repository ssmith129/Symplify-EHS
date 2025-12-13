import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment-consultation',
  imports: [MatSelectModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './appointment-consultation.html',
  styleUrl: './appointment-consultation.scss'
})
export class AppointmentConsultation {
AllRoutes=AllRoutes
}

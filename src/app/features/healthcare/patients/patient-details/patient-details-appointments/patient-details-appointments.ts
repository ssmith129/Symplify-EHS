import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DatePickerModule } from 'primeng/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-appointments',
  imports: [CommonModule,MatSelectModule,DatePickerModule,BsDatepickerModule,FormsModule,RouterLink],
  templateUrl: './patient-details-appointments.html',
  styleUrl: './patient-details-appointments.scss'
})
export class PatientDetailsAppointments {
addtime: Date[] = [new Date()] ;
AllRoutes=AllRoutes
}

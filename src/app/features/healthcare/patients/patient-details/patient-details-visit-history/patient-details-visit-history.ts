import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-details-visit-history',
  imports: [BsDatepickerModule,DatePickerModule,CommonModule,MatSelectModule,FormsModule,RouterLink],
  templateUrl: './patient-details-visit-history.html',
  styleUrl: './patient-details-visit-history.scss'
})
export class PatientDetailsVisitHistory {
AllRoutes=AllRoutes
  addtime: Date[] = [new Date()] ;
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-appointments',
  imports: [MatSelectModule,BsDatepickerModule,DatePickerModule,FormsModule,RouterLink,MatTooltipModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss'
})
export class Appointments {
AllRoutes=AllRoutes
  addtime: Date[] = [new Date()] ;
}
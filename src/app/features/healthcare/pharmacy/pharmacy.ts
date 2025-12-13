import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-pharmacy',
  imports: [MatSelectModule,CommonModule,FormsModule,BsDatepickerModule,DatePickerModule,RouterLink,MatTooltipModule],
  templateUrl: './pharmacy.html',
  styleUrl: './pharmacy.scss'
})
export class Pharmacy {
AllRoutes=AllRoutes
}

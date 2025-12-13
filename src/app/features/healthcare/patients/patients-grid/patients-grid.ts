import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patients-grid',
  imports: [BsDatepickerModule,DatePickerModule,FormsModule,CommonModule,MatSelectModule,MatTooltipModule,MatButtonModule,RouterLink,MatTooltipModule],
  templateUrl: './patients-grid.html',
  styleUrl: './patients-grid.scss'
})
export class PatientsGrid {
  addtime: Date[] = [new Date()] ;
AllRoutes=AllRoutes
}

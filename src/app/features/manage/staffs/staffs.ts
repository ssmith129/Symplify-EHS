import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-staffs',
  imports: [MatSelectModule,CommonModule,FormsModule,BsDatepickerModule,RouterLink,MatTooltipModule],
  templateUrl: './staffs.html',
  styleUrl: './staffs.scss'
})
export class Staffs {
AllRoutes=AllRoutes
}

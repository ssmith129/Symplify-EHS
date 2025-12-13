import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-plans-billings-settings',
  imports: [CommonModule,BsDatepickerModule,FormsModule],
  templateUrl: './plans-billings-settings.html',
  styleUrl: './plans-billings-settings.scss'
})
export class PlansBillingsSettings {
AllRoutes=AllRoutes
}

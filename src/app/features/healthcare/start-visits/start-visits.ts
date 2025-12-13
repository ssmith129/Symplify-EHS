import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start-visits',
  imports: [BsDatepickerModule,MatSelectModule,RouterLink],
  templateUrl: './start-visits.html',
  styleUrl: './start-visits.scss'
})
export class StartVisits {
AllRoutes=AllRoutes
}

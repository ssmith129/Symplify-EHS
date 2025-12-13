import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  imports: [RouterLink],
  templateUrl: './invoice-details.html',
  styleUrl: './invoice-details.scss'
})
export class InvoiceDetails {
AllRoutes=AllRoutes
}

import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-transaction-details',
  imports: [RouterLink],
  templateUrl: './transaction-details.html',
  styleUrl: './transaction-details.scss'
})
export class TransactionDetails {
AllRoutes=AllRoutes
}

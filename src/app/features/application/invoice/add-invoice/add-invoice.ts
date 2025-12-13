import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  imports: [RouterLink],
  templateUrl: './add-invoice.html',
  styleUrl: './add-invoice.scss'
})
export class AddInvoice {
AllRoutes=AllRoutes
value=10;
plus(){
  
    this.value++;
}
minus(){
  if(this.value>1){
    this.value--;
  }
}
}

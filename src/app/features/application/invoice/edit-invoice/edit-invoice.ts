import { Component } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-invoice',
  imports: [RouterLink],
  templateUrl: './edit-invoice.html',
  styleUrl: './edit-invoice.scss'
})
export class EditInvoice {
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

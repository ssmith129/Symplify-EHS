import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  imports: [MatSelectModule,CommonModule,FormsModule,BsDatepickerModule,RouterLink],
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.scss'
})
export class AddPatient {
  AllRoutes=AllRoutes
selected=[0];
moveNext(){
    this.selected[0]++;
}
movePrevious(){
    this.selected[0]--;
}
}
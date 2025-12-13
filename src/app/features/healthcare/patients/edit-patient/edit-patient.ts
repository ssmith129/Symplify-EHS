import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  imports: [MatSelectModule,CommonModule,FormsModule,BsDatepickerModule,DatePickerModule,RouterModule],
  templateUrl: './edit-patient.html',
  styleUrl: './edit-patient.scss'
})
export class EditPatient {
  AllRoutes=AllRoutes
  selected=[0];
  moveNext(){
      this.selected[0]++;
  }
  movePrevious(){
      this.selected[0]--;
  }
}

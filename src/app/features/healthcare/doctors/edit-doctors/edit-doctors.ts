import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-doctors',
  imports: [CommonModule,FormsModule,MatSelectModule,BsDatepickerModule,RouterModule],
  templateUrl: './edit-doctors.html',
  styleUrl: './edit-doctors.scss'
})
export class EditDoctors {
AllRoutes=AllRoutes
selected=[0];
moveNext(){
    this.selected[0]++;
}
movePrevious(){
    this.selected[0]--;
}
}

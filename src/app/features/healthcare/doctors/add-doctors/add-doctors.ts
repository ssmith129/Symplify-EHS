import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-doctors',
  imports: [CommonModule,FormsModule,MatSelectModule,BsDatepickerModule,RouterModule],
  templateUrl: './add-doctors.html',
  styleUrl: './add-doctors.scss'
})
export class AddDoctors {
AllRoutes=AllRoutes
selected=[0];
moveNext(){
    this.selected[0]++;
}
movePrevious(){
    this.selected[0]--;
}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule,RouterModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss'
})
export class Appointments {
}

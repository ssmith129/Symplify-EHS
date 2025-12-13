import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patients',
  imports: [CommonModule,RouterModule],
  templateUrl: './patients.html',
  styleUrl: './patients.scss'
})
export class Patients {

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { CustomCalendarComponent } from '../../../../shared/common/custom-calendar/custom-calendar.component';
@Component({
  selector: 'app-appointment-calendar',
  imports: [RouterLink,CustomCalendarComponent],
  templateUrl: './appointment-calendar.html',
  styleUrl: './appointment-calendar.scss'
})
export class AppointmentCalendar {
  AllRoutes=AllRoutes
  @ViewChild('eventModal') eventModal!: ElementRef;
  @ViewChild('addNewModal') addNewModal!: ElementRef;
  eventDetails = { title: '' };
  selectedDate: string = '';
}

import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Calendar, EventClickArg, EventInput, EventApi } from '@fullcalendar/core';
import { Modal } from 'bootstrap';

declare var bootstrap: any;

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
})
export class CustomCalendarComponent implements AfterViewInit, OnInit {
  @ViewChild('calendarEl') calendarEl!: ElementRef;
  @ViewChild('calendar1El') calendar1El!: ElementRef;
  @ViewChild('calendarAppointmentEl') calendarAppointmentEl!: ElementRef;
  @ViewChild('eventModal') eventModal!: ElementRef;
  @ViewChild('addNewModal') addNewModal!: ElementRef;
  @ViewChild('appointmentModal') appointmentModalEl!: ElementRef;

  calendar: Calendar | null = null;
  calendar1: Calendar | null = null;
  calendarAppointment: Calendar | null = null;
  
  eventDetails = { title: '' };
  selectedDate: string = '';
  appointmentModal: any = null;

  ngOnInit(): void {
    // Initialize appointment modal if element exists
    const appointmentModalElement = document.getElementById('appointment_details');
    if (appointmentModalElement) {
      this.appointmentModal = new bootstrap.Modal(appointmentModalElement);
    }
  }

  ngAfterViewInit(): void {
    // Initialize Calendar #1 (with draggable events)
    if (this.calendarEl?.nativeElement) {
      this.initCalendar();
    }

    // Initialize Calendar #2 (basic calendar)
    if (this.calendar1El?.nativeElement) {
      this.initCalendar1();
    }

    // Initialize Appointment Calendar
    if (this.calendarAppointmentEl?.nativeElement) {
      this.initAppointmentCalendar();
    }
  }

  private initCalendar(): void {
    const calendarEl = this.calendarEl.nativeElement;

    // Initialize external events (draggable)
    const containerEl = document.getElementById('external-events');
    if (containerEl) {
      new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: (eventEl) => {
          const className = eventEl.getAttribute('data-event-classname');
          return {
            title: eventEl.textContent?.trim() || '',
            classNames: className ? [className] : [],
          };
        },
      });
    }

    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialView: 'dayGridMonth',
      eventDisplay: 'block',
      views: {
        dayGridMonth: {
          eventDisplay: 'block',
          dayMaxEvents: true,
        },
      },
      eventDidMount: (info) => {
        // Ensure events show only title in month view
        if (info.view.type === 'dayGridMonth') {
          const eventEl = info.el;
          const timeElements = eventEl.querySelectorAll('.fc-event-time');
          timeElements.forEach((el: any) => {
            el.style.display = 'none';
          });

          const titleEl = eventEl.querySelector('.fc-event-title');
          if (titleEl) {
            (titleEl as HTMLElement).style.fontWeight = 'normal';
          }
        }
      },
      events: [
        {
          title: 'Meeting',
          className: 'badge badge-info',
          backgroundColor: '#1976d2',
          textColor: '#fff',
          start: new Date(Date.now() - 168000000).toISOString(),
          allDay: true,
        },
        {
          title: 'Office',
          className: 'badge badge-secondary',
          backgroundColor: '#0D7858',
          textColor: '#fff',
          start: new Date(Date.now() + 338000000).toISOString(),
          allDay: true,
        },
        {
          title: 'Hiring',
          className: 'badge badge-success',
          backgroundColor: '#09800F',
          textColor: '#fff',
          start: new Date(Date.now() - 338000000).toISOString(),
          allDay: true,
        },
        {
          title: 'Holiday',
          className: 'badge badge-pink',
          backgroundColor: '#CC25B0',
          textColor: '#fff',
          start: new Date(Date.now() + 68000000).toISOString(),
          allDay: true,
        },
        {
          title: 'Employee',
          className: 'badge badge-warning',
          backgroundColor: '#FDAF22',
          textColor: '#fff',
          start: new Date(Date.now() + 88000000).toISOString(),
          allDay: true,
        },
      ],
      eventClick: (info: EventClickArg) => {
        this.handleEventClick(info);
      },
      dateClick: (info: any) => {
        this.handleDateClick(info);
      },
      editable: true,
      droppable: true,
      drop: (info) => {
        console.log('Event dropped');
      },
      eventReceive: (info) => {
        console.log('Event added', info.event.title);
      },
    });

    this.calendar.render();
  }

  private initCalendar1(): void {
    const calendarEl = this.calendar1El.nativeElement;
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const TODAY = todayDate.toISOString().slice(0, 10);

    this.calendar1 = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      },
      height: 500,
      contentHeight: 580,
      aspectRatio: 3,
      views: {
        dayGridMonth: { buttonText: 'month' },
        timeGridWeek: { buttonText: 'week' },
        timeGridDay: { buttonText: 'day' },
      },
      initialView: 'dayGridMonth',
      initialDate: TODAY,
      editable: true,
      dayMaxEvents: true,
      navLinks: true,
      events: [
        {
          title: 'All Day Event',
          start: new Date(Date.now() - 168000000).toISOString(),
          backgroundColor: '#FDE9ED',
          allDay: true,
        },
        {
          id: '1000',
          title: 'Repeating Event',
          start: new Date(Date.now() - 338000000).toISOString(),
          allDay: true,
        },
      ],
    });

    this.calendar1.render();
  }

  private initAppointmentCalendar(): void {
    const calendarEl = this.calendarAppointmentEl.nativeElement;

    this.calendarAppointment = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      events: [
        {
          title: '',
          extendedProps: {
            images: [
              { url: 'assets/img/avatars/avatar-01.jpg', data: 'James Carter - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-02.jpg', data: 'Sophia Wilson - 10:30 AM to 11:30 AM' },
            ],
          },
          backgroundColor: 'rgba(0, 0, 0, .2)',
          start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
        },
        {
          title: '',
          extendedProps: {
            images: [
              { url: 'assets/img/avatars/avatar-03.jpg', data: 'Thomas - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-04.jpg', data: 'Shaver - 10:30 AM to 11:30 AM' },
              { url: 'assets/img/avatars/avatar-05.jpg', data: 'Ann - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-06.jpg', data: 'Claffin - 11:00 AM to 12:00 PM' },
              { url: 'assets/img/avatars/avatar-07.jpg', data: 'Enrique - 12:30 PM to 01:30 PM' },
            ],
          },
          backgroundColor: 'rgba(0, 0, 0, .2)',
          start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
        },
        {
          title: '',
          extendedProps: {
            images: [
              { url: 'assets/img/avatars/avatar-08.jpg', data: 'David Smith - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-09.jpg', data: 'Deacon - 10:30 AM to 11:30 AM' },
              { url: 'assets/img/avatars/avatar-10.jpg', data: 'Stone - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-11.jpg', data: 'Evans - 11:00 AM to 12:00 PM' },
            ],
          },
          backgroundColor: 'rgba(0, 0, 0, .2)',
          start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
        },
        {
          title: '',
          extendedProps: {
            images: [
              { url: 'assets/img/avatars/avatar-12.jpg', data: 'Olivia Miller - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-13.jpg', data: 'Deacon - 10:30 AM to 11:30 AM' },
              { url: 'assets/img/avatars/avatar-14.jpg', data: 'Stone - 10:00 AM to 11:00 AM' },
              { url: 'assets/img/avatars/avatar-15.jpg', data: 'Evans - 11:00 AM to 12:00 PM' },
            ],
          },
          backgroundColor: 'rgba(0, 0, 0, .2)',
          start: new Date(Date.now() + 68000000).toISOString().slice(0, 10),
        },
      ],
      eventDidMount: (info) => {
        this.handleAppointmentEventMount(info);
      },
    });

    this.calendarAppointment.render();
  }

  private handleAppointmentEventMount(info: any): void {
    const eventEl = info.el;
    const images = info.event.extendedProps.images || [];

    // Background color on day cell
    const tdEl = eventEl.closest('td');
    if (tdEl) {
      (tdEl as HTMLElement).style.backgroundColor = info.event.backgroundColor || '';
    }

    // Prepare image avatars
    const avatarImages = images.slice(0, 2).map((img: any) => `
      <img class="fc-event-image avatar avatar-sm rounded-circle calendar-img"
        src="${img.url}" alt="" title="${img.data}" data-bs-toggle="tooltip" data-bs-placement="top">
    `).join('');

    const moreImages = images.slice(2);
    const moreImagesHtml = moreImages.map((img: any) => `
      <div class="d-flex align-items-center avatar avatar-sm rounded-circle cal-img">
        <img class="fc-event-image calendar-img" src="${img.url}" alt="${img.data}"
          title="${img.data}" data-bs-toggle="tooltip" style="display:none;">
      </div>
    `).join('');

    // Build 'Show more' popover content
    let showMoreLink = '';
    let popover: any = null;

    if (moreImages.length > 0) {
      showMoreLink = `<a href="javascript:void(0);" class="show-more">Show more</a>`;
      const popoverContent = `
        <div class="calendar-popover">
          <div class="calendar-popover-header d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <h5 class="mb-0">${info.event.start?.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric' })}</h5>
            <button type="button" class="btn-close popover-close" aria-label="Close"></button>
          </div>
          <div class="calendar-popover-body">
            ${images.map((image: any) => {
              const [name, time] = image.data.split('-');
              return `
                <div class="calendar-popover-item d-flex align-items-center justify-content-between border rounded p-2 mb-2 gap-2" data-bs-toggle="modal" data-bs-target="#appointment_details">
                  <div class="d-flex align-items-center gap-2">
                    <div class="flex-shrink-0 position-relative pe-1">
                      <img src="${image.url}" class="rounded avatar avatar-sm me-2">
                      <span class="avatar-xxs fs-10 rounded-circle bg-dark text-white position-absolute end-0 bottom-0 d-flex align-items-center justify-content-center">
                        <i class="ti ti-video"></i>
                      </span>
                    </div>
                    <span class="fw-medium text-dark">${name?.trim() || ''}</span>
                  </div>
                  <div class="text-muted fw-medium text-dark small">${time?.trim() || ''}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      popover = new bootstrap.Popover(eventEl, {
        html: true,
        trigger: 'click',
        sanitize: false,
        content: popoverContent,
        placement: 'auto',
        container: 'body',
      });

      eventEl.addEventListener('shown.bs.popover', () => {
        const popoverId = eventEl.getAttribute('aria-describedby');
        const popoverEl = document.getElementById(popoverId || '');
        if (popoverEl) {
          const closeBtn = popoverEl.querySelector('.popover-close');
          if (closeBtn) {
            closeBtn.addEventListener('click', () => {
              popover.hide();
            });
          }

          // Add MODAL TRIGGER listener
          popoverEl.querySelectorAll('[data-bs-target="#appointment_details"]').forEach((el) => {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              if (this.appointmentModal) {
                this.appointmentModal.show();
              }
            });
          });
        }
      });
    }

    // Inject avatars and optional "Show more"
    const imageWrapper = document.createElement('div');
    imageWrapper.innerHTML = avatarImages + moreImagesHtml + showMoreLink;
    const titleContainer = eventEl.querySelector('.fc-event-title-container');
    if (titleContainer) {
      titleContainer.appendChild(imageWrapper);
    }

    // Tooltip initialization
    setTimeout(() => {
      const tooltipElements = eventEl.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipElements.forEach((el: any) => {
        new bootstrap.Tooltip(el);
      });
    }, 0);
  }

  private handleEventClick(info: EventClickArg): void {
    this.eventDetails = { title: info.event.title };
    const modalElement = this.eventModal?.nativeElement;
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  private handleDateClick(info: any): void {
    // Only show modal if clicking on empty space, not on events
    if (info.dayEl && !info.dayEl.querySelector('.fc-event')) {
      const modalElement = this.addNewModal?.nativeElement;
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }

      if (info.date) {
        this.selectedDate = info.date.toISOString().slice(0, 10);
      }
    }
  }
}

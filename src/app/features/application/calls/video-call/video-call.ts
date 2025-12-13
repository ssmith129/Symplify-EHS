import { Component,CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-video-call',
  imports: [RouterLink],
  templateUrl: './video-call.html',
  styleUrl: './video-call.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoCall {
  AllRoutes=AllRoutes
  @ViewChild('swiperRef', { static: true }) swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement as any;

    // Assign Swiper parameters programmatically
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 24,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 4,
        },
      }
      });

    // initialize only after parameters set (because init="false")
    swiperEl.initialize();
  }

}

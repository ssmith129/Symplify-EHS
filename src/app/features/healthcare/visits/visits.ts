import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-visits',
  imports: [CommonModule,BsDatepickerModule,MatSelectModule,DatePickerModule,FormsModule,RouterLink,MatTooltipModule,SlickCarouselModule],
  templateUrl: './visits.html',
  styleUrl: './visits.scss'
})
export class Visits {
  addtime: Date[] = [new Date()] ;
  AllRoutes=AllRoutes
  public slideconfig = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      // prevArrow: $('.visit-prev'),
      // nextArrow: $('.visit-next'),
      arrows: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1 }
        }
      ]
    };
  }


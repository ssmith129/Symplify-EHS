import { Component } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { AllRoutes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-search-result',
  imports: [LightgalleryModule,RouterLink,MatTooltipModule],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss'
})
export class SearchResult {
  AllRoutes=AllRoutes
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
    ngAfterViewInit() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { index, prevIndex } = detail;
  };
}

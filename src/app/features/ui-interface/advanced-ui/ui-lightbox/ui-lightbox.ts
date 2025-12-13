import { Component } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-ui-lightbox',
  imports: [LightboxModule,LightgalleryModule],
  templateUrl: './ui-lightbox.html',
  styleUrl: './ui-lightbox.scss'
})
export class UiLightbox  {
  public albumsOne: any[] = [];
  public albumsTwo: any[] = [];

  constructor(private _lightbox: Lightbox, private cdRef: ChangeDetectorRef) {
    for (let i = 1; i <= 5; i++) {
      const src = `assets/img/media/img-0${i}.jpg`;
      const caption = `Image ${i} caption here`;

      this.albumsOne.push({ src });
      this.albumsTwo.push({ src, caption });
    }
  }

  /** ✅ Preload helper */
  preloadImage(url: string): Promise<void> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
    });
  }

  /** ✅ Open only after image is cached */
  async open(index: number, albumArray: Array<any>): Promise<void> {
    const src = albumArray[index].src;
    await this.preloadImage(src);  // preload the image first

    this._lightbox.open(albumArray, index);
    this.cdRef.detectChanges();
  }

  close(): void {
    this._lightbox.close();
  }
}

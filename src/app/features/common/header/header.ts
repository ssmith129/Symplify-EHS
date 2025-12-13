import { Component } from '@angular/core';
import { AllRoutes } from '../../../shared/routes/routes';
import { sidebarData } from '../../../shared/models/sidebar.model';
import { Router, RouterLink } from '@angular/router';
import { SideBarService } from '../../../shared/side-bar/side-bar.service';
import { SettingsService } from '../../../shared/settings/settings.service';
import { CommonService } from '../../../shared/common/common.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,MatTooltipModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  AllRoutes = AllRoutes;
  public openBox = false;
  public miniSidebar  = false;
  public addClass = false;
  elem = document.documentElement;
  base = '';
  page = '';
  last = '';
  public sidebarData: Array<sidebarData> = [];
  dataLayout: string = '';
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

 themeColor: 'light' | 'dark' = 'light';
  mobileSidebar=false;
  constructor(public router: Router,public sideBar: SideBarService,public settings:SettingsService,public common : CommonService) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.common.base.subscribe((res: string) => {
      this.base = res
    });
    this.common.page.subscribe((res: string) => {
      this.page = res
    });
    this.common.last.subscribe((res: string) => {
      this.last = res
    });

  }

  openBoxFunc() {
    this.openBox = !this.openBox;
    /* eslint no-var: off */
    var mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    if (this.openBox) {
      mainWrapper.classList.add('open-msg-box');
    } else {
      mainWrapper.classList.remove('open-msg-box');
    }
  }
  public toggleMobileIcon(): void {
    this.sideBar.switchMobileSideBarPosition();
    this.mobileSidebar=!this.mobileSidebar;
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
    
      this.addClass = !this.addClass;
      /* eslint no-var: off */
      var root = document.getElementsByTagName( 'html' )[0];
      /* eslint no-var: off */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var sidebar:any = document.getElementById('sidebar')
  
      if (this.addClass) {
        root.classList.add('menu-opened');
        sidebar.classList.add('opened');
      }
      else {
        root.classList.remove('menu-opened');
        sidebar.classList.remove('opened');
      }
    }
    dataLayoutHidden = false;
    ngOnInit(): void {
    const savedTheme = localStorage.getItem('themeColor') as 'light' | 'dark' | null;
    this.themeColor = savedTheme || 'light';
    this.sideBar.changeThemeColor(this.themeColor);
    const html = document.documentElement;
    const dataLayout = html.getAttribute('data-layout');
     dataLayout === 'hidden';

  }

  toggleTheme(): void {
    this.themeColor = this.themeColor === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeColor', this.themeColor);
    this.sideBar.changeThemeColor(this.themeColor);
  }
toggleSubMenu(): void {
  this.sideBar.triggerCollapseSubMenus();
}

  }

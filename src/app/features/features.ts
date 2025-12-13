import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router,Event as RouterEvent, RouterModule } from '@angular/router';
import { Header } from './common/header/header';
import { Sidebar } from './common/sidebar/sidebar';
import { SideBarService } from '../shared/side-bar/side-bar.service';
import { DataService } from '../shared/data/data.service';
import { CommonService } from '../shared/common/common.service';
import { SettingsService } from '../shared/settings/settings.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs';
import { menu, sidebarData } from '../shared/models/sidebar.model';

import { CommonModule } from '@angular/common';
import { Layout } from './common/layout/layout';
export interface RouterObject {
  id?: number;
  url: string;
  type?: number;
}
@Component({
  selector: 'app-features',
  imports: [RouterModule,Header,Sidebar,Layout,CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
public miniSidebar = 'false';
  public expandMenu = 'false';
  public mobileSidebar = 'false';
  public sideBarActivePath = false;
  public headerActivePath = false;
  base = '';
  page = '';
  last = '';
  currentUrl = '';
layoutMode = '';
  constructor(
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    private breakpointObserver:BreakpointObserver,
    private common:CommonService,
    private settings:SettingsService
  ) 
  {
    this.router.events.pipe(
  filter(event => event instanceof NavigationEnd)
).subscribe(() => {
  this.getRoutes(this.router);
});
    this.getRoutes(this.router);

    this.common.base.subscribe((res: string) => {
      this.base = res
    });
    this.common.page.subscribe((res: string) => {
      this.page = res
    });
    this.common.last.subscribe((res: string) => {
      this.last = res
    });

    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = 'true';
      } else {
        this.miniSidebar = 'false';
      }
    });
    //mobile sidebarclose
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.getRoutes(data);
      }
      if (data instanceof NavigationEnd) {
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = 'false';
      }if (data instanceof NavigationStart) {
        this.getRoutes(data);
      }
      if (data instanceof NavigationEnd) {
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = 'false';
      }
    });
    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = 'true';
      } else {
        this.mobileSidebar = 'false';
      }
    });
    this.settings.layoutMode.subscribe((layout) => {
      this.layoutMode = layout;
      if (layout == 'mini') {
        this.miniSidebar = 'true';
      } else {
        this.miniSidebar = 'false';
      }
    });
    this.sideBar.expandSideBar.subscribe((res: string) => {
      this.expandMenu = res;
      if (res == 'false' && this.miniSidebar == 'true') {
        this.data.sidebarData.map((mainMenus: sidebarData) => {
          mainMenus.menu.map((resMenu: menu) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      if (res == 'true' && this.miniSidebar == 'true') {
        this.data.sidebarData.map((mainMenus: sidebarData) => {
          mainMenus.menu.map((resMenu: menu) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });

       
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

ngOnInit():void{
  this.breakpointObserver.observe(['(min-width: 991.98px)'])
  .subscribe((result: { matches: any; }) => {
    if (result.matches) {
      this.mobileSidebar = 'false';
    } 
  });   
}

  private getRoutes(route: RouterObject): void {
    const splitVal =  route?.url.split('/');
    this.common.currentRoute.next(route.url);
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
  } 
  ngOnDestroy(): void {
    this.sideBar.changeThemeColor('light');
  }
sidebarClose(){
  this.mobileSidebar='false';
}
}

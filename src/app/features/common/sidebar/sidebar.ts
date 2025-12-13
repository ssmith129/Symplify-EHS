import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AllRoutes } from '../../../shared/routes/routes';
import { menu, sidebarData } from '../../../shared/models/sidebar.model';
import { DataService } from '../../../shared/data/data.service';
import { SideBarService } from '../../../shared/side-bar/side-bar.service';
import { SettingsService } from '../../../shared/settings/settings.service';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink,NgScrollbarModule,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  base = '';
  page = '';
  last = '';

  currentUrl = '';
  sidebartop = false;
  sidebarfooter=false;
   openSubmenuOneItem: any = null;
   
   onToggleSidebar(): void {
  const layout = document.documentElement.getAttribute('data-layout');

  if (layout === 'hidden') {
    this.settings.togglehidden();
  } else {
    this.toggleSidebarmini();
  }
}
  togglesidebartop():void{
    this.sidebartop=!this.sidebartop
  }
  public toggleSidebarmini(): void {
    this.sideBar.switchSideMenuPosition();

  }
    footerClose(){
    this.sidebarfooter=true;
  }
  public multilevel: Array<boolean> = [false, false, false];

  AllRoutes = AllRoutes;
  public sidebarData: Array<sidebarData> = [];
  layoutHidden=false;

  constructor(
    private data: DataService,
    private router: Router,
    public sideBar: SideBarService,
    public settings:SettingsService,
  ) {
        router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    // this.sidebarData = this.data.sideBar;
    // router.events.subscribe((event: object) => {
    //   if (event instanceof NavigationEnd) {
    //     this.getRoutes(event);
    //   }
    // });
      this.data.getSideBarData.subscribe((res:sidebarData[]) => {
        this.sidebarData = res;
    });
    this.getRoutes(this.router);
  }
public toggleSidebar(): void {
  const wrapper = document.getElementsByClassName('main-wrapper')[0];
  const overlay = document.getElementsByClassName('sidebar-overlay')[0];

  if (wrapper) {
    wrapper.classList.remove('slide-nav');
  }

  if (overlay) {
    overlay.classList.remove('opened');
  }
}

public expandSubMenus(menu: { menuValue: string; showSubRoute: boolean; }): void {
    
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.sidebarData.map((mainMenus: sidebarData) => {

      mainMenus.menu.map((resMenu: menu) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
    
  }
public handleSubmenuClick(sub: any): void {
  const label = sub.label?.toLowerCase();

  if (label === 'dashboard 3' || label === 'dashboard 4') {
    localStorage.removeItem('subdrop');
  }


} 
  isOpen=false;
   public expandSubMenusActive(): void {
    const activeMenu = sessionStorage.getItem('menuValue'); // Was 'base' — changed to 'menuValue'
  
    if (!Array.isArray(this.sidebarData)) {
      console.warn('side_bar_data is not initialized');
      return;
    }
  
    this.sidebarData.forEach((mainMenu: sidebarData) => {
      if (!Array.isArray(mainMenu.menu)) return;
  
      mainMenu.menu.forEach((resMenu: menu) => {
        if (activeMenu) {
          // Show only the menu matching the stored menuValue
          resMenu.showSubRoute = (resMenu.menuValue === activeMenu);
        } else {
          // No session value: Show only 'index' base routes
          resMenu.showSubRoute = (resMenu.base === 'index');
        }
      });
    });
  
    this.isOpen = !activeMenu;
  }

  private getRoutes(route: { url: string }): void {
    const bodyTag = document.body;

    bodyTag.classList.remove('slide-nav')
    bodyTag.classList.remove('opened')
    this.currentUrl = route.url;

    const splitVal = route.url.split('/');


 this.base = splitVal[1] || '';
this.page = splitVal[2] || '';
this.last = splitVal[3] || '';



if(this.page === 'invoice' || this.page === 'invoice-details'){
  this.last = this.page
}

  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }
  openSubmenuOne(subMenus: any): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;
  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
    this.multiLevel2=true;
  }


ngOnInit(): void {
  this.expandSubMenusActive();
this.sideBar.collapseSubMenu$.subscribe(() => {
    this.collapseAllSubMenus();
  });
}
collapseAllSubMenus(): void {
  this.sidebarData.forEach((mainMenu: sidebarData) => {
    mainMenu.menu.forEach((resMenu: menu) => {
      resMenu.showSubRoute = false;
    });
  });
}
}

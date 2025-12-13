import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('template');

  public base = '';
  public page = '';
  constructor(private router: Router) {
    setTheme('bs5'); 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.base =URL[1] ? URL[1].replace('-',' '): '';
        this.page = URL[2] ? URL[2].replace('-',' '): '';
      }
      if(this.base === 'index'){
        this.page = 'Dashboard'
      }
      if(this.base === 'appointments' || this.base === 'visits'
        ||this.base ==='pharmacy' || this.base === 'staffs' ||this.base === 'widgets' || this.base === 'calls'
        ||this.base ==='login' || this.base === 'forgot password' ||this.base === 'email verification' ||this.base === 'two step verification'
        ||this.base ==='reset password' || this.base === 'coming soon' ||this.base === 'under maintenance' 
        ||this.base ==='layout fullwidth' || this.base === 'layout hoverview' ||this.base === 'layout rtl' 
        ||this.base ==='layout mini' || this.base === 'layout hidden' ||this.base === 'layout dark' 
        ||this.base ==='notifications' 
      ){
        this.page = this.base
      }
      // if (event instanceof NavigationEnd){}
    });
  }
}

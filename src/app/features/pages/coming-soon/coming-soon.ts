import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { interval, map, takeWhile, startWith } from 'rxjs';
import { AllRoutes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss'
})
export class ComingSoon{
AllRoutes = AllRoutes;
private targetDate = new Date('Sep 06, 2026 16:00:00').getTime();

  // Create a reactive signal from an RxJS interval
  private countdown$ = interval(1000).pipe(
    startWith(0),
    map(() => {
      const now = Date.now();
      const distance = this.targetDate - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false
      };
    }),
    takeWhile(t => !t.expired, true) // stop when expired
  );

  countdown = toSignal(this.countdown$, { initialValue: { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false } });

  ngOnDestroy(): void {
    // no manual cleanup needed, `toSignal` unsubscribes automatically
  }
}

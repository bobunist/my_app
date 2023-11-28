import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AbstractPomodoroService } from './i-pomodoro-service';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService implements AbstractPomodoroService {
  private timer: any;
  private seconds: number = 0;
  private timerSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.seconds);
  private elapsedSegments: number[] = [];

  startTimer(duration: number): void {
    const intervalInMilliseconds: number = 45 * 60 * 1000;
    const futureTime: number = Date.now() + intervalInMilliseconds;

    this.seconds = duration;
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
        this.timerSubject.next(this.seconds);
      } else {
        this.stopTimer();
      }
      
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
    this.elapsedSegments.push(this.seconds);
    this.timerSubject.next(0)
  }

  getRemainingTime(): Observable<number> {
    return this.timerSubject.asObservable();
  }

  getElapsedSegments(): number[] {
    return this.elapsedSegments;
  }
}

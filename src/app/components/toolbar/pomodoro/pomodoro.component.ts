import { Component, OnInit } from '@angular/core';
import { PomodoroService } from 'src/app/services/pomodoro.service';

@Component({
  selector: 'toolbar-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  remainingTime: number;
  remainingOutputTime: string;
  progressPercentage: number;
  interval = 60 * 45 // seconds
  constructor(private pomodoroService: PomodoroService) {}

  ngOnInit(): void {
    this.pomodoroService.getRemainingTime().subscribe(
      (time) => {
        this.remainingTime = time;
        this.updateProgress();
      }
    );
  }

  startTimer(): void {
    this.pomodoroService.startTimer(this.interval);
  }

  stopTimer(): void {
    this.pomodoroService.stopTimer();
  }

  private updateProgress(): void {
    const remainingTime = this.remainingTime;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    this.remainingOutputTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    this.progressPercentage = ((this.interval - remainingTime) / this.interval) * 100;
}

  getProgressBarBackground(): string {
    return `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink ${this.progressPercentage}%, pink 0)`;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractPomodoroService {
  abstract startTimer(duration: number): void;
  abstract stopTimer(): void;
  abstract getRemainingTime(): Observable<number>;
  abstract getElapsedSegments(): number[];
}

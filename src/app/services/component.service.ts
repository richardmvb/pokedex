import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private alertSubject = new BehaviorSubject<string>(null);
  alert$: Observable<string> = this.alertSubject.asObservable();

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingOn()),
        concatMap(() => obs$),
        finalize(() => this.loadingOff())
      );
  }

  private loadingOn(): void {
    this.loadingSubject.next(true);
  }

  private loadingOff(): void {
    this.loadingSubject.next(false);
  }

  showAlertWithMessage(message: string): void {
    this.alertSubject.next(message);
  }

  hideAlert(): void {
    this.alertSubject.next(null);
  }
}

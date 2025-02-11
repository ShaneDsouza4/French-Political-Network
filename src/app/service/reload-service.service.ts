import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadServiceService {

  constructor() { }

  private reloadSubject = new Subject<void>();

  reloadComponent() {
    this.reloadSubject.next();
  }

  getReloadObservable() {
    return this.reloadSubject.asObservable();
  }
}

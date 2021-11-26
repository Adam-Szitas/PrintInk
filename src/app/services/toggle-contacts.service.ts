import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleContactService {

  isOpen$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  updateToggle(oldVal: boolean): void{
    this.isOpen$.next(!oldVal);
  }
}

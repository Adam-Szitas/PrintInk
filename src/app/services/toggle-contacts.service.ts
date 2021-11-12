import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleContactService {

  private isOpen: boolean = false;

  constructor() {}

  updateToggle(): void{
    this.isOpen = !this.isOpen;
  }

  getToggleValue(): Observable<boolean>{
    const open = of(this.isOpen);
    return open;
  }
}

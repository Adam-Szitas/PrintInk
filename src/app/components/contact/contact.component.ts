import { Component, OnInit } from '@angular/core';
import { ToggleContactService } from 'src/app/services/toggle-contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lastIsOpen: boolean = false;
  get isOpen$(){
    return this.toggleService.getToggleValue().subscribe(
      (toggleValue:boolean) => {
        if(!this.lastIsOpen === toggleValue){
          this.lastIsOpen = toggleValue;
          console.log(this.lastIsOpen);
          return toggleValue ?? false;
        }else{
          return;
        }
      }
    )
  }

  constructor(
    private toggleService: ToggleContactService
  ) { }

  ngOnInit(): void {

  }
}

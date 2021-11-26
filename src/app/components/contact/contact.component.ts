import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ToggleContactService } from 'src/app/services/toggle-contacts.service';

interface Data{
  name: string;
  mail: string;
  title: string;
  phone: string;
  description: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  placeholder: Data = {
    name: 'Name',
    mail: 'E-mail address',
    title: 'Title',
    phone: 'Phone number',
    description: 'Description'
  }

  lastIsOpen$!: boolean;

  form = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.maxLength(30)
    ]),
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    mail: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.minLength(9)
    ]),
    description: new FormControl('',[
      Validators.required
    ])
  });

  constructor(
    private toggleService: ToggleContactService
  ) { }

  ngOnInit(): void {
    this.toggleService.isOpen$.subscribe(
      (toggleValue:boolean) => {
        this.lastIsOpen$ = toggleValue;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onSubmit(){
    console.log(this.form.valid.valueOf());

  }
}

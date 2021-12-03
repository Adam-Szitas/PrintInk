import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private toggleService: ToggleContactService,
    protected httpService: HttpClient
  ) {}

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
    const data = {
      name: this.form.get('name')?.value,
      mail: this.form.get('mail')?.value,
      phone: this.form.get('phone')?.value,
      title: this.form.get('title')?.value,
      descr: this.form.get('description')?.value
    }

    const httpHeader = {
      headers: new HttpHeaders({
        'Accept'        : 'application/json',
        'Content-Type'  : 'application/json'
      })
    }

    this.httpService.post('https://print-ink.sk/phpmailer/mail.php', data, httpHeader).subscribe(
      (result:any) => {
        console.log(result);
      },
      error => {
        console.error(error);
      }
    )
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: 'Celé Meno',
    mail: 'E-mailová Addressa',
    title: 'Téma',
    phone: 'Telefón',
    description: 'Obsah'
  }

  left: boolean = false;
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

  switchContactAndMessage(ContactElement: HTMLElement, MessageElement:HTMLElement, Toggle: HTMLElement){

    if(ContactElement.classList.contains('opacity-0')){
      MessageElement.classList.add('opacity-0');
      ContactElement.classList.remove('opacity-0');

      Toggle.classList.remove('print_blue');
      Toggle.classList.add('print_purple');

      this.left = false;
    }else{
      MessageElement.classList.remove('opacity-0');
      ContactElement.classList.add('opacity-0');

      Toggle.classList.add('print_blue');
      Toggle.classList.remove('print_purple');

      this.left = true;
    }

  }
}

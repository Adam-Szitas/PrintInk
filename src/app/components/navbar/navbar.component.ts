import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public toggle(event:HTMLElement,navbar: HTMLElement,height:string){
    console.log(event?.attributes.getNamedItem('data-element="tall-dropdown"'));

    if(event.classList.contains('visible')){
      event.classList.remove('visible');
    }else{
      event.classList.add('visible');
    }
  }
  public marketing(){
    window.open('https://onlinecatalog.malfini.com/01275686/sk/catalog','_blank');
  }

}

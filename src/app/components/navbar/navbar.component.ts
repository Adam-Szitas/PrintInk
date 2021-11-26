import { Component, OnInit } from '@angular/core';
import { ToggleContactService } from 'src/app/services/toggle-contacts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private oldVal!: boolean;
  showMobileDropDown: boolean = false;

  constructor(
    private toggleService: ToggleContactService
  ) {

  }

  ngOnInit(): void {
    this.toggleService.isOpen$.subscribe(
    (response) => {
      this.oldVal = !!response;
    })
  }

  getParentMarginRight(Element: HTMLElement){
    if(Element){
      return Element.style.marginRight;
    }else{
      return 0;
    }
  }

  Contact():void{
    this.toggleService.updateToggle(this.oldVal);
  }

  public toggle(event?:HTMLElement,element?: string): void{

    if(element === 'MobileDropDown'){
      console.log(element);
      this.showMobileDropDown = !this.showMobileDropDown;
    }else{
      if(event?.classList.contains('visible')){
        event.classList.remove('visible');
      }else{
        event?.classList.add('visible');
      }
    }
  }
  public marketing(){
    window.open('https://onlinecatalog.malfini.com/01275686/sk/catalog','_blank');
  }

}

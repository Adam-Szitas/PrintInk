import { state, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ElementList } from 'src/app/interfaces/interfaces';
import { GalleryService } from '../../gallery-service.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss'],
  // animations: [
  //   trigger('next',[
  //     //in case next
  //     state('')
  //   ])
  // ]
})
export class InterfaceComponent implements OnInit {

  @ViewChild('leftHidden') leftHidden!: ElementRef;
  @ViewChild('left') left!: ElementRef;
  @ViewChild('leftCenter') leftCenter!: ElementRef;
  @ViewChild('center') center!: ElementRef;
  @ViewChild('rightCenter') rightCenter!: ElementRef;
  @ViewChild('right') right!: ElementRef;
  @ViewChild('rightHidden') rightHidden!: ElementRef;

  images!: Array<Object>;

  constructor(
    private galleryService: GalleryService
  ) { }

  @HostListener('document:click',['$event'])
  onClick($event: Event){
    this.getElementsToSwap($event);
    this.galleryService.nextSlide()
  }


  ngOnInit(): void {
    this.images = this.galleryService.getItems();
  }

  getElementsToSwap($event: Event){

    let elementObject: ElementList = {
      leftHidden: this.leftHidden,
      left: this.left,
      leftCenter: this.leftCenter,
      center: this.center,
      rightCenter: this.rightCenter,
      right: this.right,
      rightHidden: this.rightHidden
    }

    console.log(this.leftHidden.nativeElement.attributes);


    this.galleryService.updateElementList(elementObject)

  }

}

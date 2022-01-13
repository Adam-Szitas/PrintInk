import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery/gallery-service.service';

export type buttonDirections = 'right' | 'left' | 'up' | 'down';

@Component({
  selector: 'app-direction-button',
  templateUrl: './direction-button.component.html',
  styleUrls: ['./direction-button.component.scss']
})
export class DirectionButtonComponent implements OnInit {

  @Input()
  direction!: buttonDirections

  buttonRotateStyle: string = ''

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    switch(this.direction){
      case 'left': {
        this.buttonRotateStyle = '-90deg';
        break;
      }
      case 'right': {
        this.buttonRotateStyle = '90deg';
        break;
      }
      case 'up': {
        this.buttonRotateStyle = '0';
        break;
      }
      case 'down': {
        this.buttonRotateStyle = '180deg';
        break;
      }
      default: {
        this.buttonRotateStyle = '0';
        break;
      }
    }
  }

  swapSlide(direction: string){
    this.galleryService.swapSlide(direction);
  }

}

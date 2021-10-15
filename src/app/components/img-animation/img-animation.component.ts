import { Component, OnInit } from '@angular/core';
import * as images from '../../../assets/imgs/images.json';

@Component({
  selector: 'app-img-animation',
  templateUrl: './img-animation.component.html',
  styleUrls: ['./img-animation.component.scss'],
})
export class ImgAnimationComponent implements OnInit {

  private delay: number = 5000;
  private collapseTimer: number = 500;
  private loadFloatingTextTimer: number = 200;

  imgs!:any;
  actualImg: number = 0;
  nextImg: number = 1;


  constructor(

  ) {

  }

  private actualIndex = ():number => {
    return this.actualImg;
  };

  private nextIndex = ():number => {
    if(this.actualImg === this.imgs.length - 1){
      return 0;
    }else{
      return this.actualImg + 1;
    }
  }


  //Switch Z-index
  private switchZIndex = () => {
      //switch the z-indecies
      setTimeout(() => {

      }, this.loadFloatingTextTimer)
  }

  //switch Method
  private switchImgs = () => {
    //active img width -> 0

    let actual = document.querySelector('[data-number="'+ this.actualIndex() +'"]');
    let next = document.querySelector('[data-number="'+ this.nextIndex() +'"]');


    next?.classList.remove('hidden');
    next?.classList.add('active');

    actual?.classList.add('hidden');
    setTimeout(() => {
      actual?.classList.remove('active');
    }, this.collapseTimer)


    if(this.actualImg === this.imgs.length - 1){
      this.actualImg = 0;
    }else{
      this.actualImg++;
    }

    //switching Z-indecies
    this.switchZIndex();

  }

  private nextImage = () => {
    setTimeout(() => {

      //animation which modifies the width of the active (class) img
      this.switchImgs();

      //next image recursively
      this.nextImage();

    }, this.delay);
  }

  ngOnInit(): void {

    this.imgs = images.images;

    this.actualImg = 0;

    this.nextImage();

  }

}

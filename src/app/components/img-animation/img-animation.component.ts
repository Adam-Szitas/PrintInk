import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as images from '../../../assets/imgs/images.json';

@Component({
  selector: 'app-img-animation',
  templateUrl: './img-animation.component.html',
  styleUrls: ['./img-animation.component.scss']
})
export class ImgAnimationComponent implements OnInit {

  private delay: number = 5000;

  imgs!:any;
  actualImg: number = 0;
  nextImg: number = 1;


  constructor(
    private http: HttpClient
  ) {

  }

  nextImage = () => {
    setTimeout(() => {
      if(this.actualImg < (this.imgs.length - 1)){
        this.actualImg++;

        if((this.actualImg + 1) < (this.imgs.length)){
          this.nextImg = this.actualImg + 1;
        }else{
          this.nextImg = 0;
        }
      }else{
        this.actualImg = 0;
        this.nextImg = this.actualImg + 1;
      }
      console.log(this.actualImg);

      this.nextImage();
    }, this.delay);
  }

  ngOnInit(): void {

    this.imgs = images.images;
    console.log(this.imgs);

    this.nextImage();

  }

}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, PlatformRef, ViewChild } from '@angular/core';
import { ElementList } from 'src/app/interfaces/interfaces';
import { GalleryService } from '../../gallery-service.service';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss'],
  animations: [
    trigger('leftHidden',[
      //in case next
      state('next', style({
        'opacity': '0',
        'z-index': '1',
        'left': '0'
      })),
      state('default',style({
        'height': '50%',
        'width': '350px',
        'left': '0',
        'margin-left': '15px',
        'z-index': '2',
        'opacity': '0'
      })),
      state('back', style({
        'height': '50%',
        'width': '350px',
        'left': '0',
        'margin-left': '15px',
        'z-index': '3',
        'opacity': '1'
      })),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('left',[
      //in case next
      state('next',style({
        'height': '50%',
        'width': '350px',
        'left': '0',
        'margin-left': '15px',
        'z-index': '2'
      })),
      state('default',style({
        'height': '50%',
        'width': '350px',
        'left': '0',
        'margin-left': '15px',
        'z-index': '3'
      })),
      state('back',style({
        'height': '75%',
        'width': '500px',
        'left': '0',
        'margin-left': '15%',
        'z-index': '4'
      })),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('leftCenter',[
      //in case next
      state('next',style({
        'height': '50%',
        'width': '350px',
        'left': '0',
        'margin-left': '15px',
        'z-index': '3'
      })),
      state('default', style({
        'height': '75%',
        'width': '500px',
        'left': '0',
        'margin-left': '15%',
        'z-index': '4'
      })),
      state('back', style({
        'height': '90%',
        'width': '650px',
        'left': '0',
        'margin-left': '{{ marginLeft }}px',
        'z-index': '5'
      }),
      {params:
        {
          marginLeft: (window.innerWidth - 650) /2
        }
      }),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('center',[
      //in case next
      state('next',style({
        'height': '75%',
        'width': '500px',
        'left': '0',
        'margin-left': '15%',
        'z-index': '4'
      })),
      state('default',style({
        'height': '90%',
        'width': '650px',
        'left': '0',
        'margin-left': "{{ marginLeft }}px",
        'z-index': '5'
      }),
      {params:
        {
          marginLeft: (window.innerWidth - 650) /2
        }
      }),
      state('back',style({
        'height': '75%',
        'width': '500px',
        'left': '0',
        'margin-left': '{{ marginLeftFromRight }}px',
        'z-index': '4'
      }),{
        params: {
          marginLeftFromRight: (window.innerWidth - 650)*0.88
        }
      }),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('rightCenter',[
      //in case next
      state('next',style({
        'height': '90%',
        'width': '650px',
        'right': '0',
        'margin-right': '{{ marginLeft }}px',
        'z-index': '5'
      }),
      {params:
        {
          marginLeft: (window.innerWidth - 650) /2
        }
      }),
      state('default',style({
        'height': '75%',
        'width': '500px',
        'right': '0',
        'margin-right': '15%',
        'z-index': '4'
      })),
      state('back', style({
        'height': '50%',
        'width': '350px',
        'right': '0',
        'margin-right': '15px',
        'z-index': '3'
      })),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('right',[
      //in case next
      state('next',style({
        'height': '75%',
        'width': '500px',
        'right': '0',
        'margin-right': '15%',
        'z-index': '4'
      })),
      state('default', style({
        'height': '50%',
        'width': '350px',
        'right': '0',
        'margin-right': '15px',
        'z-index': '3'
      })),
      state('back', style({
        'opacity': '0',
        'z-index': '2',
        'right': '0',
        'height': '50%',
        'width': '350px'
      })),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
    trigger('rightHidden',[
      //in case next
      state('next', style({
        'opacity': '1',
        'width': '350px',
        'z-index': '3',
        'right': '0',
        'margin-right': '15px',
        'height': '50%'
      })),
      state('default',style({
        'opacity': '0',
        'height': '50%',
        'width': '350px',
        'right': '0',
        'margin-right': '15px',
        'z-index': '2',
      })),
      state('back', style({
        'opacity': '0',
        'z-index': '1',
        'right': '0',
        'margin-right': '15px',
        'height': '50%'
      })),
      transition('default => next', animate(0)),
      transition('next => default', animate('500ms ease-in-out')),
      transition('default => back', animate(0)),
      transition('back => default', animate('500ms ease-in-out'))
    ]),
  ]
})
export class InterfaceComponent implements OnInit {
  calculatedMarginLeft: number = 0;
  calculatedMarginLeftFromRight: number = window.innerWidth - 650;

  leftHidden!: string
  left!: string
  leftCenter!: string
  center!: string
  rightCenter!: string
  right!: string
  rightHidden!: string

  images!: Array<any>;
  private activeCenter: number = 0;
  public leftHiddenVar: any;
  public leftVar: any;
  public leftCenterVar: any;
  public centerVar: any;
  public rightCenterVar: any;
  public rightVar: any;
  public rightHiddenVar: any;

  updateVariables(){
    setTimeout(()=> {

      this.leftHiddenVar = {
        src: this.images[this.activeCenter - 3] ? this.images[this.activeCenter - 3] : this.images[this.images.length - 3]
      }
      this.leftVar = {
        src: this.images[this.activeCenter - 2] ? this.images[this.activeCenter - 2] : this.images[this.images.length - 2]
      }
      this.leftCenterVar = {
        src: this.images[this.activeCenter - 1] ? this.images[this.activeCenter - 1] : this.images[this.images.length - 1]
      }
      this.centerVar = {
        src: this.images[this.activeCenter]
      }
      this.rightCenterVar = {
        src: this.images[this.activeCenter + 1] ? this.images[this.activeCenter + 1] : this.images[0]
      }
      this.rightVar = {
        src: this.images[this.activeCenter + 2] ? this.images[this.activeCenter + 2] : this.images[1]
      }
      this.rightHiddenVar = {
        src: this.images[this.activeCenter + 3] ? this.images[this.activeCenter + 3] : this.images[2]
      }
    },1)
  }


  @HostListener('window:resize',['$event'])
  onWindowResize(event: Event){

    this.calculatedMarginLeft = (window.innerWidth - 650)/2;
    this.calculatedMarginLeftFromRight = ((window.innerWidth -650)/100)*88;

  }



  constructor(
    private galleryService: GalleryService
  ) {}


  ngOnInit(): void {

    this.calculatedMarginLeft = (window.innerWidth - 650)/2;
    this.calculatedMarginLeftFromRight = ((window.innerWidth -650)/100)*88;

    this.images = this.galleryService.getItems;
    console.log(this.images);



    this.defaultByOne();

    this.galleryService.swapSlideFromComponent$.subscribe((direction: string) => {
      if(direction === 'left'){
        this.backClicked()
      }else{
        this.nextClicked()
      }
    });

    this.updateVariables()
  }

  updateActiveCenter(direction: "left" | "right"):void{
    console.log(direction, this.activeCenter);
    if(direction === "left"){
      if(this.activeCenter - 1 >= 0){
        this.activeCenter--
      }else{
        this.activeCenter = (this.images.length - 1)
      }
    }else{
      if(this.activeCenter + 1 < this.images.length){
        this.activeCenter++
      }else{
        this.activeCenter = 0
      }
    }
    this.updateVariables()
  }

  defaultByOne(){
    this.leftHidden = 'default'
    this.left = 'default'
    this.leftCenter = 'default'
    this.center = 'default'
    this.rightCenter = 'default'
    this.right = 'default'
    this.rightHidden = 'default'
  }

  nextClicked(){
    setTimeout(() => {
      this.nextByOne();
    },10)
    this.updateActiveCenter("left")
    setTimeout(() => {
      this.defaultByOne();
    },50)
  }

  backClicked(){
    setTimeout(() => {
      this.backByOne();
    },10)
    this.updateActiveCenter("right")
    setTimeout(() => {
      this.defaultByOne();
    },50)
  }

  backByOne(){
    this.leftHidden = 'back'
    this.left = 'back'
    this.leftCenter = 'back'
    this.center = 'back'
    this.rightCenter = 'back'
    this.right = 'back'
    this.rightHidden = 'back'
  }

  nextByOne(){
    this.leftHidden = 'next'
    this.left = 'next'
    this.leftCenter = 'next'
    this.center = 'next'
    this.rightCenter = 'next'
    this.right = 'next'
    this.rightHidden = 'next'
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

    this.galleryService.updateElementList(elementObject)

  }

}

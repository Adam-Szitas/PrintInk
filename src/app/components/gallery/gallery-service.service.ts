import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ElementList, GalleryItems } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private pool!: GalleryItems;
  private items!: Array<Object>;
  activePic!: string;

  private elementList!: ElementList;

  getItems(){
    return this.items;
  }

  constructor(
    private router: Router
  ) { }

  init(){

  }

  select(){

  }

  loadPicToCenter(id: string){
    // this.activePic = (this.pool?.filter( item => item.match(id))) as string;
  }


  loadGalleryCore(galleryItems: GalleryItems){
    this.pool = galleryItems;

    for(let i = 0; i < this.pool.items.length; i++){
      this.items[i] = new Image();
      this.items[i] = this.pool.items
    }

    this.router.navigate(['/interface'])
  }

  updateElementList(elementObject: ElementList){
    this.elementList = elementObject;
  }

  nextSlide(){
    this.swapSlideAttrs('next');
  }

  backSlide(){
    this.swapSlideAttrs('back');
  }

  private swapSlideAttrs(direction: string){
    if(direction === 'next'){
      this.elementList.leftHidden.nativeElement.attributes['data-position'] = ''
    }
  }

}

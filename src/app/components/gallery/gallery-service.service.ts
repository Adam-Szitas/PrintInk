import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ElementList, GalleryItems } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private pool!: GalleryItems;
  private items: any = [];
  activePic!: string;

  private elementList!: ElementList;

  get getItems(){
    return this.items;
  }

  constructor(
    private router: Router
  ) {}

  loadPicToCenter(id: string){
    // this.activePic = (this.pool?.filter( item => item.match(id))) as string;
  }


  loadGalleryCore(galleryItems:any){
    this.pool = galleryItems;


    for(let i = 0; i < this.pool.items.length; i++){
      this.items[i] = new Image()
      this.items[i] = this.pool.items[i]
    }
    console.log(this.items);


    this.router.navigate(['/interface'])
  }

  updateElementList(elementObject: ElementList){
    this.elementList = elementObject;
  }



  //moving the gallery in a direction
  private swapSlideFromComponent = new Subject<any>();
  swapSlideFromComponent$ = this.swapSlideFromComponent.asObservable();

  swapSlide(direction: string){
      this.swapSlideFromComponent.next(direction)
  }


}

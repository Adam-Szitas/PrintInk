import { Component, Input, OnInit } from '@angular/core';
import { GalleryItems } from 'src/app/interfaces/interfaces';
import { GalleryService } from '../../gallery-service.service';
import { HttpService } from '../../http.service';

interface ImageCover{
  source: string,
  alt: string,
  id: string
}

@Component({
  selector: 'app-gallery-core',
  templateUrl: './gallery-core.component.html',
  styleUrls: ['./gallery-core.component.scss']
})
export class GalleryCoreComponent implements OnInit {

  @Input() imageCover!: ImageCover;
  items!: Array<Object>;

  constructor(
    private httpService: HttpService,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
  }

  selectCover($event: Event){
    let galleryId: string = ($event.target as HTMLElement).attributes.getNamedItem('data-cover-id')?.value as string

    if(galleryId) {
      let gallery: GalleryItems | undefined = this.httpService.getGallery(galleryId);

      if(gallery){
        this.galleryService.loadGalleryCore(gallery)
      }

    }



  }

}

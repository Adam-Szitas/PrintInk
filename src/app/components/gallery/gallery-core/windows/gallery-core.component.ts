import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  selectCover($event: Event){
    console.log('selected cover: ', ($event.target as HTMLElement).attributes );

  }

}

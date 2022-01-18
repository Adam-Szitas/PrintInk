import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: Object[] = [
    {
      source: "../../../assets/imgs/colored.jpg",
      alt: "colored",
      id: "testId"
    },{
      source: "../../../assets/imgs/colored.jpg",
      alt: "colored",
      id: "testId"
    },{
      source: "../../../assets/imgs/colored.jpg",
      alt: "colored",
      id: "testId"
    },{
      source: "../../../assets/imgs/colored.jpg",
      alt: "colored",
      id: "testId"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

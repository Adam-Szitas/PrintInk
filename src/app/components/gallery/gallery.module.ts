import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCoreComponent } from './gallery-core/windows/gallery-core.component';
import { GalleryComponent } from './gallery.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryCoreComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GalleryModule { }

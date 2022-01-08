import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCoreComponent } from './gallery-core/windows/gallery-core.component';
import { GalleryComponent } from './gallery.component';
import { InterfaceComponent } from './gallery-core/interface/interface.component';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryCoreComponent,
    InterfaceComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GalleryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCoreComponent } from './gallery-core/windows/gallery-core.component';
import { GalleryComponent } from './gallery.component';
import { InterfaceComponent } from './gallery-core/interface/interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectionButtonComponent } from '../buttons/direction-button/direction-button.component';


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryCoreComponent,
    InterfaceComponent,
    DirectionButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class GalleryModule { }

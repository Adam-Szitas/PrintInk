import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ImgAnimationComponent } from './components/img-animation/img-animation.component';
import {HttpClientModule} from '@angular/common/http';
import { IconContainerComponent } from './components/icon-container/icon-container.component';
import { RouterModule } from '@angular/router';
import { IconSetContainerComponent } from './components/icon-set-container/icon-set-container.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToggleContactService } from './services/toggle-contacts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImgAnimationComponent,
    IconContainerComponent,
    IconSetContainerComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      }
    ])
  ],
  providers: [ToggleContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItems } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private result: GalleryItems | undefined

  constructor(
    private http: HttpClient
  ) {}

    getGallery(id: string): GalleryItems | undefined{

      const httpHeader = new HttpHeaders({
        'Content-type'  : 'application/json',
        'galleryId'            : `${id}`
      })

      this.http.get('https://localhost:8000/web/gallery', {headers: httpHeader}).subscribe(
        (result) => {
          this.result = result as GalleryItems
        },
        (error) => {
          this.result = undefined
        }
      )

      return this.result;

    }

}

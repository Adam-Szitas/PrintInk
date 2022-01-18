import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private result: any

  constructor(
    private http: HttpClient
  ) {}

    getGallery(id: string): any{

      const httpHeader = new HttpHeaders({
        'Content-type'  : 'application/json',
        'galleryId'            : `${id}`
      })

      this.http.get('http://localhost/printInk/web/gallery.php', {headers: httpHeader}).subscribe(
        (result) => {
          this.result = result
        },
        (error) => {
          this.result = error
        }
      )

      return this.result;

    }

}

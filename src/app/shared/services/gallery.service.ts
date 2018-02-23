import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class GalleryService {

  private galleries;
  private gallery;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getGalleries() {
    this.galleries = [];
    return new Observable((o: Observer<any>) => {
        this.http.get('http://localhost:8000/api/all-galleries', {
            headers: this.authService.getRequestHeaders()
        }).subscribe((galleries: any[]) => {
            this.galleries = galleries['data'];

            o.next(this.galleries);
            return o.complete();
        });
    });
  }

  public getSingleGallery(id) {
    this.gallery = [];
    return new Observable((o: Observer<any>) => {
        this.http.get('http://localhost:8000/api/galleries/'+id, {
            headers: this.authService.getRequestHeaders()
        }).subscribe((gallery: any[]) => {
    
            this.gallery = gallery;
    
    
            o.next(this.gallery);
            return o.complete();
        });
    });
    }

}

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GalleryService } from '../../shared/services/gallery.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private galleries;

  constructor(private galleryService: GalleryService) { 
    this.galleryService.getGalleries().subscribe(
      data => {
        this.galleries = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  ngOnInit() {
  }

}

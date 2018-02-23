import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { GalleryService } from '../../shared/services/gallery.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Comment } from '../../shared/model/comment.model';


@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

  public gallery: any[] = [];
  private params;
  public comments: Array<Comment> = [];
  public comment: Comment = new Comment();

  constructor(public auth: AuthService, 
    public galleryService: GalleryService, 
    public route: ActivatedRoute) {
      this.route.params.subscribe((params: Params) => {
            this.params = params;
        });
        
        this.galleryService.getSingleGallery(this.params.id).subscribe(
            data => {
                this.gallery = data;
            },
            (err: HttpErrorResponse) => {
                alert(`Backend returned code ${err.status} with message: ${err.error}`);
            }
        );

        this.galleryService.getSingleGalleryComments(this.params.id).subscribe(
             data => {
                 this.comments = data;
             },
             (err: HttpErrorResponse) => {
                 alert(`Backend returned code ${err.status} with message: ${err.error}`);
             }
        );
    }

    addComment(){
        this.comment.user_id=this.auth.user.id;
        this.comment.gallery_id=this.params.id;
        delete this.comment.id;

        this.galleryService.addComment(this.comment).subscribe((data) => {
            this.comments=data;
        });
    }

    removeComment(comment) {
        if(confirm("Are you sure to delete this comment?")) {
            this.galleryService.removeComment(comment).subscribe();
        }
    }

  ngOnInit() {
  }


    
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Observer } from 'rxjs';
import { Comment } from '../model/comment.model';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class GalleryService {

  private galleries;
  private gallery;
  private comments;

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

    public getSingleGalleryComments(id) {
        this.comments = [];
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/comments/'+id, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((comments: any[]) => {

                this.comments = comments;

                o.next(this.comments);
                return o.complete();
            });
        });
    }

    public addComment(comment: Comment) {
        return new Observable((o: Observer<any>) => {
            this.http.post('http://localhost:8000/api/comments', {
                content: comment.content,
                gallery_id: comment.gallery_id,
                user_id: comment.user_id
            }, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((comments: any) => {
                    const comment = new Comment(
                        comments.id,
                        comments.content,
                        comments.gallery_id,
                        comments.user_id,
                        comments.user);
                    this.comments.push(comment);
                    o.next(this.comments);
                    return o.complete();
                }, (err: HttpErrorResponse) => {
                    alert(`Backend returned code ${err.status} with message: ${err.error}`);
                }
            );
        });
    }

    public removeComment(comment: Comment){
    return new Observable((o: Observer<any>) => {
        this.http.delete('http://localhost:8000/api/comment/' + comment.id,{
            headers: this.authService.getRequestHeaders()
        }).subscribe(
            () => {
                const index = this.comments.indexOf(comment);
                this.comments.splice(index, 1);

                o.next(index);
                return o.complete();
            }
        );
    });
}

}

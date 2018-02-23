import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './guards/auth.guard';
import { GalleryService } from './services/gallery.service';
import { GuestGuard } from './guards/guest.guard';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        GalleryService,
        GuestGuard
    ],
    declarations: [
    ],
    exports: [
    ]  
})

export class SharedModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { MyGalleryComponent } from './components/my-gallery/my-gallery.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SingleGalleryComponent } from './components/single-gallery/single-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    CreateGalleryComponent,
    MyGalleryComponent,
    HomepageComponent,
    SingleGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CreateGalleryComponent } from './components/create-gallery/create-gallery.component';
import { MyGalleryComponent } from './components/my-gallery/my-gallery.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/all-galleries', canActivate: [ AuthGuard ], pathMatch: 'full' },
    { path: 'all-galleries', component: HomepageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'create', component: CreateGalleryComponent, canActivate: [ AuthGuard ] },
    { path: 'my-galleries', component: MyGalleryComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
  
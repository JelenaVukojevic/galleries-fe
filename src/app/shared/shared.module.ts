import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    declarations: [
    ],
    exports: [
    ]  
})

export class SharedModule { }
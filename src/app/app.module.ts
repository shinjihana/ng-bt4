import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashService } from './flash-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [FlashService],
  bootstrap: [AppComponent]
})
export class AppModule { }

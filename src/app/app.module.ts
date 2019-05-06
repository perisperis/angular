//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
//import { AlertModule} from 'ngx-bootstrap';
//import { ButtonsModule} from 'ngx-bootstrap';
//import { TabsModule } from 'ngx-bootstrap'; 
//import { CarouselModule } from 'ngx-bootstrap/carousel';
//import { ProgressbarModule} from 'ngx-bootstrap'; 
//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule} from 'ngx-bootstrap';
import { ButtonsModule} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap'; 
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule} from 'ngx-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//import { InstagramComponent } from './instagram/instagram.component';
//import { GoogleDriveComponent } from './google-drive/google-drive.component';
//import { TwitterComponent } from './twitter/twitter.component';

import { CommonModule } from '@angular/common';


import { InstagramComponent } from './instagram/instagram.component';
//import { GoogleDriveComponent } from './google-drive/google-drive.component';
import { TwitterComponent } from './twitter/twitter.component';


@NgModule({
  declarations: [
    AppComponent,
    InstagramComponent,
    TwitterComponent
  ],
  imports: [
            
            ButtonsModule.forRoot(),
            AlertModule.forRoot(),
            ProgressbarModule.forRoot(),
            TabsModule.forRoot(),
            CarouselModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

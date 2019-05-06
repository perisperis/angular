import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModule} from 'ngx-bootstrap';
import { ButtonsModule} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap'; 
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule} from 'ngx-bootstrap'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InstagramComponent } from './instagram/instagram.component';
//import { GoogleDriveComponent } from './google-drive/google-drive.component';
//import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
            ButtonsModule.forRoot(),
            AlertModule.forRoot(),
            ProgressbarModule.forRoot(),
            TabsModule.forRoot(),
            CarouselModule.forRoot(),
    InstagramComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

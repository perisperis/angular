import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { InstagramComponent } from './instagram/instagram.component';
//import { GoogleDriveComponent } from './google-drive/google-drive.component';
//import { TwitterComponent } from './twitter/twitter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
//path: '/home/twitter',
//component:     TwitterComponent,
//data: { title: 'Hola List' }
//}  
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

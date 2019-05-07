import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	
	constructor() {
	    setTheme('bs4'); // or 'bs4'
	  }
	

//	title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
	 

  
}

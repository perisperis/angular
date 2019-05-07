import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
	  
	  
//	  access_token = new FormControl('');
//	  token = new FormControl('');

	  fragment: string = "";
	  href : string = "";
      error : string = "";
      name : string = "13114621023.041cf7e.40001f0b4cd64ef5858d78bd7ed63a17";
	  link  : string = ""; 
      instagramUser  : object;
      instagramActividad  : JSON;

		private productsObservable : Observable<any[]>; 


	  access_token : string = "";

		  carouselOptions = {
				    margin: 25,
				    nav: true,
				    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
				    responsiveClass: true,
				    responsive: {
				      0: {
				        items: 1,
				        nav: true
				      },
				      600: {
				        items: 1,
				        nav: true
				      },
				      1000: {
				        items: 2,
				        nav: true,
				        loop: false
				      },
				      1500: {
				        items: 3,
				        nav: true,
				        loop: false
				      }
				    }
				  }
				 
				  images = [
				    {
				      text: "Everfresh Flowers",
				      image: "favicon.png"
				    },
				    {
				      text: "Morning Greens",
				      image: "favicon.png"
				    },
				    {
				      text: "Bunch of Love",
				      image: "favicon.png"
				    },
				    {
				      text: "Blue Clear",
				      image: "favicon.png"
				    }
				  ] 
		  
						  
						  
//						  itemsPerSlide = 3;
//						  singleSlideOffset = false;
//						  noWrap = false;
//						 
//						  slidesChangeMessage = '';
//						 
//						  slides = [
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'},
//						    {image: 'favicon.png'}
//						  ];
//						 
//						  onSlideRangeChange(indexes: number[]): void {
//						    this.slidesChangeMessage = 'Slides have been switched: ${indexes}';
//						  }
						  
						  
	  constructor(public rest:InstagramService, private route: ActivatedRoute, private router: Router) { }

	  ngOnInit() {
		  console.log("InstagramComponent");
//	      this.href = this.router.url;
//	      this.error = this.route.snapshot.paramMap.get("error")
//	      this.access_token = this.href.substring( this.href.indexOf( "=" )+1);
		  this.name = "13220103252.00ca767.b5cdba7bf41944b5b353038ab7622880";
		  this.getActivity();
		  
	  }

	  getToken() {
		  
			let tokens = new Map([]);
			let token =  tokens.get(this.name);
		  this.link = this.rest.getInstagram(this.name);
	  };
	  

		
	  getAccessToken() {
		  
			let access_tokens = new Map([]);
			let access =  access_tokens.get(this.name);
			this.rest.getInstagramUser(this.name).subscribe((res : any[])=>{
				 let resSTR = JSON.stringify(res);
				 let resJSON = JSON.parse(resSTR); 
//				 console.log(resSTR);
				 this.instagramUser = resJSON;
			  });
		      
		  };
		  
	  getActivity() {
		  
			let access_tokens = new Map([]);
			let access =  access_tokens.get(this.name);
			this.rest.getInstagramRecent(this.name).subscribe((res : any[])=>{
				 let resSTR = JSON.stringify(res);
				 let resJSON = JSON.parse(resSTR);
//				 console.log(resSTR);
				 this.instagramActividad = resJSON.data;
			  });
		      
		  };

}

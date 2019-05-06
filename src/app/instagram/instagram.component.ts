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
      name : string = "";
	  link  : string = ""; 
      instagramUser  : object;
      instagramActividad  : object;

		private productsObservable : Observable<any[]>; 


	  access_token : string = "";


	  constructor(public rest:InstagramService, private route: ActivatedRoute, private router: Router) { }

	  ngOnInit() {
		  console.log("InstagramComponent");
	      this.href = this.router.url;
	      this.error = this.route.snapshot.paramMap.get("error")
	      this.access_token = this.href.substring( this.href.indexOf( "=" )+1);
		  
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
				 console.log(resSTR);
				 this.instagramUser = resJSON;
			  });
		      
		  };
		  
	  getActivity() {
		  
			let access_tokens = new Map([]);
			let access =  access_tokens.get(this.name);
			this.rest.getInstagramRecent(this.name).subscribe((res : any[])=>{
				 let resSTR = JSON.stringify(res);
				 let resJSON = JSON.parse(resSTR);
				 console.log(resSTR);
				 this.instagramActividad = resJSON;
			  });
		      
		  };
			  
		  
		  

}

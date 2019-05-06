import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Buffer } from 'buffer';
//declare const Buffer

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

    name : string = "";
	link  : string = ""; 
	twitter  : object;
    tweetsdata : object; 
	access_token : string = "";
	consumerkey : string = "";
	consumersecret : string = "";
	bearertoken : string = "";
    searchquery : string = "";

   constructor(public rest:TwitterService, private route: ActivatedRoute, private router: Router) { }

	  
  ngOnInit() {
	  console.log("TwitterComponent");
  }
  
  makecall() {
	  
	  
	  console.log("makecall");
		this.rest.makecall().subscribe((res : any[])=>{
			 let resSTR = JSON.stringify(res);
			 let resJSON = JSON.parse(resSTR);
			 console.log(resSTR);
			 this.twitter = resJSON;
		  });
  }
	  
  searchcall(){
	  
	  console.log("searchcall");
	  
	  console.log(this.searchquery);
	  
		this.rest.searchcall(this.searchquery,
				this.bearertoken).subscribe((res : any[])=>{
			 let resSTR = JSON.stringify(res);
			 let resJSON = JSON.parse(resSTR);
			 this.tweetsdata = resJSON.results;
			 console.log(JSON.stringify(this.tweetsdata));
		});
	  }
  
  favorites(){
	  
	  console.log("favorites");
	  
	  console.log(this.searchquery);
	  
		this.rest.favorites(this.searchquery).subscribe((res : any[])=>{
			 let resSTR = JSON.stringify(res);
			 let resJSON = JSON.parse(resSTR);
			 console.log(resSTR);
			 this.twitter = resJSON;
		  });
	  }
  
  followers(){
	  
	  console.log("followers");
	  
	  console.log(this.searchquery);
	  
		this.rest.followers(this.searchquery).subscribe((res : any[])=>{
			 let resSTR = JSON.stringify(res);
			 let resJSON = JSON.parse(resSTR);
			 console.log(resSTR);
			 this.twitter = resJSON;
		  });
	  }
}

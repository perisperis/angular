import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Buffer } from 'buffer';

const endpoint = 'https://api.twitter.com/1.1/';
const ser_timeline = 'statuses/user_timeline.json?screen_name=snap';

//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type':  'application/json',
//    'Access-Control-Allow-Methods': 'GET'
//  })
//};

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

	constructor(private http: HttpClient) { }
	
	private productsObservable : Observable<any[]>;
	
	getTwitter(): Observable<any> {
		let request_uri = endpoint+ser_timeline;
		console.log(request_uri);
		return this.http.get(request_uri);
	}
	
	  makecall(): Observable<any> {
		  let headers = new HttpHeaders();
		    headers.append('Content-Type', 'application/X-www-form-urlencoded');
		    return this.http.post('http://localhost:3000/authorize', {headers: headers});
	  }
		    
	
	  searchcall(searchquery,bearertoken): Observable<any> {
//		  let headers = new HttpHeaders();
//		  let searchterm = 'query=' + searchquery;
//		    headers.append('Content-Type', 'application/X-www-form-urlencoded');
//		    return this.http.post('http://localhost:3000/search', searchquery,bearertoken, {headers: headers});
		  

				  
		    let encsearchquery = encodeURIComponent(searchquery);
		    let bearerheader = 'Bearer ' + bearertoken;
	        
		    let httpOptions = {
		    		headers: new HttpHeaders({Authorization: bearerheader
			         	 ,"content-type": "application/json",
			         	})
		    }; 
	        
	        console.log(bearerheader);
	        console.log(searchquery);
	 
	        var requestData = { "query":"from:fbcloudnet",
	                "maxResults": "100"
	        };
	        
	        var resSTR = JSON.stringify(requestData);
	        console.log(resSTR);
	        var resJSON = JSON.parse(resSTR);
	        console.log(resJSON);
			 
	        return this.http.post<any>('https://api.twitter.com/1.1/tweets/search/30day/30Days.json'
	        		, resSTR,
	        		httpOptions);
	        		
//	        request.post('https://api.twitter.com/1.1/tweets/search/30day/30Days.json', {
//	        	body: resSTR,
//	            headers: {Authorization: bearerheader
//	            	 ,"content-type": "application/json",
//	            	}
//	        	}, function(error, response, body) {
//	                if(error)
//	                console.log(error);
//	                else {
//	                	console.log(JSON.parse(body));
//	                    res.json({success: true, data:JSON.parse(body)});
//	                }
//	                
//	            });
	  }
	  
	  favorites(searchquery): Observable<any> {
		  let headers = new HttpHeaders();
		  let searchterm = 'query=' + searchquery;
		    headers.append('Content-Type', 'application/X-www-form-urlencoded');
		    return this.http.post('http://localhost:3000/favorites', searchterm, {headers: headers});
	  }

	  followers(searchquery): Observable<any> {
		  let headers = new HttpHeaders();
		  let searchterm = 'query=' + searchquery;
		    headers.append('Content-Type', 'application/X-www-form-urlencoded');
		    return this.http.post('http://localhost:3000/followers', searchterm, {headers: headers});
	  }  
		    
}
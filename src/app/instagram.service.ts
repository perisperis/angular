import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//https://www.instagram.com/developer/

const endpoint = 'https://www.instagram.com/oauth/authorize/';
const api_instagram = 'https://api.instagram.com/v1/';
const redirect_uri = 'https://peris.dev/angular';

const response_type = '&redirect_uri='+redirect_uri+'&response_type=token&scope=likes+public_content';
const users_self = api_instagram+'users/self/?access_token=';
const users_recent = api_instagram+'users/self/media/recent/?access_token=';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Methods': 'GET'
//    	'Access-Control-Allow-Origin': 'origin-list'
    	
  })
};

@Injectable({
  providedIn: 'root'
})
export class InstagramService {


	
	constructor(private http: HttpClient) { }
	
	private extractData(res: any[]) {
		 return res;
	}
	
	
	private handleError<T> (operation = 'operation', result?: T) {
		  return (error: any): Observable<T> => {
			  console.error('""""""""""""""""""""""""""""""""""""""""""""""""""""""""');
		    console.error(error); // log to console instead
		    console.log(`${operation} failed: ${error.message}`);
		    console.error('""""""""""""""""""""""""""""""""""""""""""""""""""""""""');

		    return of(result as T);
		  };
		}
	
	
	getInstagram(id) {
		let request_uri = endpoint + '?client_id='+id + response_type;
		return request_uri;
	}

	getInstagramUser(access_token): Observable<any> {
		let request_uri = users_self+access_token;
		console.log(request_uri);
		return this.http.get(request_uri);//.pipe(map(this.extractData));
	}
	
	getInstagramRecent(access_token): Observable<any> {
		let request_uri = users_recent+access_token;
		console.log(request_uri);
		return this.http.get(request_uri);//.pipe(map(this.extractData));
	}
	
	
	
/*
		getProduct(id): Observable<any> {
		  return this.http.get(endpoint + 'holas/' + id).pipe(map(this.extractData));
		}

		addProduct (product): Observable<any> {
		  console.log(product);
		  return this.http.post<any>(endpoint + 'hola', JSON.stringify(product), httpOptions).pipe(
		    tap((product) => console.log(`added product w/ id=${product.id}`)),
		    catchError(this.handleError<any>('addHola'))
		  );
		}

		updateProduct (id, product): Observable<any> {
		  return this.http.put(endpoint + 'holas/' + id, JSON.stringify(product), httpOptions).pipe(
		    tap(_ => console.log(`updated product id=${id}`)),
		    catchError(this.handleError<any>('updateHola'))
		  );
		}

		deleteProduct (id): Observable<any> {
		  return this.http.delete<any>(endpoint + 'holas/' + id, httpOptions).pipe(
		    tap(_ => console.log(`deleted product id=${id}`)),
		    catchError(this.handleError<any>('deleteHola'))
		  );
		}*/
}

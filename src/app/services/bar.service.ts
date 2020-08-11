import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';	
import { Bar } from '../models/bar';
import { Global } from './global';

@Injectable() /*con esto le digo que esto es un servicio que vamos a 'inyectar'*/

export class BarService{

	public url:string;

	constructor(
		private _http:HttpClient

		){
			this.url = Global.url;
		}

		saveBar(bar:Bar):Observable<any>{

			let params = JSON.stringify(bar);
			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.post(this.url+'/save-bar',params,{headers:headers});
		}

		getBars():Observable<any>{

			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.get(this.url+'/get-bars',{headers:headers});
		}


		getBar(id):Observable<any>{

			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.get(this.url+'/get-bar/'+id,{headers:headers});
		}

		findBars(search):Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/json');			
			return this._http.get(this.url+'/find-bars/'+search,{headers:headers});
		}




		

}

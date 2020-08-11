import { Component, OnInit } from '@angular/core';
import { Bar } from '../../models/bar';
import { BarService} from '../../services/bar.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [BarService]
})
export class DetailComponent implements OnInit {

	public barId:string;
	public url:string;
	public bar:Bar;

  constructor(
  	private _barService:BarService,
  	private _router:Router,
  	private _route:ActivatedRoute
  	) { 
  	this.url = Global.url;
  }

  ngOnInit() {
  	this._route.params.subscribe(params =>{
  		let id = params.id;

  		this.getBar(id);
  	});

  	
  }


  getBar(id){

  		this._barService.getBar(id).subscribe(

  			response =>{
  				this.bar = response.bar;
  				console.log(response.bar);

  			},
  			error=>{
  				console.log(<any>error);
  			}

  	);

  		

  }


}

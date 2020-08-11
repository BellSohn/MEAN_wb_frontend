import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { BarService} from '../../services/bar.service';
import { Bar } from '../../models/bar';
import { Global } from '../../services/global';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers:[BarService]
})
export class BarComponent implements OnInit {

	public bars:Bar[];
	public url:string;
  public name:string;
  public pubs:Bar[];
  public search:string;
 

  constructor(

  	private _barService:BarService,
    private _router:Router,
    private _route:ActivatedRoute
  
  	
  	) {
  		this.url = Global.url;
  	 }

  ngOnInit() {

  		this.getBars();	
     
  	}


   	getBars(){

    		this._barService.getBars().subscribe(

    			response =>{
    				//console.log(response);
    				if(response.bars){
    				this.bars = response.bars;	
    				}
    				
    			},
    			error => {
    				console.log(<any>error);
    			}

    			)
    	}



    /*onSubmit(form){

      

      var search = this.search;
      //console.log(search);
    

      this._barService.findBars(search).subscribe(

          response =>{
            console.log(response);
            if(response.pubs){
              this.bars = response.bars;
            }
          },
          error =>{
            console.log(<any>error);
          }

        )

    }*/






}

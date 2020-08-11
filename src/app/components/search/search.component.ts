import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { BarService } from '../../services/bar.service';
import { Bar } from '../../models/bar';
import { Global } from '../../services/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[BarService]
})
export class SearchComponent implements OnInit {

	public search:string;
	public bars:Bar[];
	public url:string;
  public status:string;

  constructor(
    private _barService:BarService
    ) {
    this.url = Global.url;
   }

  ngOnInit() {
    
  }



  onSubmit(form){      

      var search = this.search;   
      console.log(search);

      this._barService.findBars(this.search).subscribe(

          response =>{
           

            if(response.bars){
               console.log(response);
              this.status = 'success';
              this.bars = response.bars;
            }
          },
          error =>{
            this.status = 'puto error';
            console.log(<any>error);
          }

        )
    }


}

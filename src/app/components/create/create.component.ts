import { Component, OnInit } from '@angular/core';
import { Bar } from '../../models/bar';
import { BarService } from '../../services/bar.service';
import { UploadService} from '../../services/upload.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[BarService,UploadService]
})
export class CreateComponent implements OnInit {

	public title :string;
	public bar:Bar;
  public save_bar;
  public status:string;
	public url:string;
	public filesToUpload:Array<File>; /*use this variable,to check if the request comes with files*/



  constructor(

  	private _barService:BarService,
  	private _uploadService:UploadService /*use to call to load methods*/

  	) {
  		this.title = "put an smile on the site";
  		this.bar = new Bar('','','','','','','','');
  		this.url = Global.url;
  	 }

  ngOnInit() {
  }


  	onSubmit(form){      

      this._barService.saveBar(this.bar).subscribe(

        response =>{          
          if(response.bar){
              //upload the image
   if(this.filesToUpload){
        this._uploadService.makeFileRequest(Global.url+"/upload-image/"+response.bar._id,[],
         this.filesToUpload,'image').then((result:any)=>{
             console.log(result);
             this.save_bar = result.bar;
             this.status = 'success';
             form.reset();

         });

        }else{

            this.save_bar = response.bar;
            this.status = 'success';
            form.reset();
        }

       }else{

           this.status = 'failed';
       }

        },
        error =>{
            console.log(<any>error);
        }


        );


  	}


    /*in  form event ,I have all data comming through the form*/
  	fileChangeEvent(fileInput:any){
  		console.log(fileInput);
  		this.filesToUpload = <Array<File>>fileInput.target.files;

  	}



}

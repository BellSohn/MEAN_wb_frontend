import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	about_content:String =  `Welcome to Worl Bar.Tell us know about this bar or pub 
	that has a special meaning for you, becouse if his music,
	the enviroment,or simple becouse that day you knew there the girl
	of your dreams.We are pleased to have your comments and photos, greetings!`;

  constructor() { }

  ngOnInit(): void {
  }

}

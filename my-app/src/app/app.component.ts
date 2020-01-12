import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	pageTitle = "Hello";

	constructor(private router: Router) { }

	public getURL(){
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				var title = ((<NavigationEnd>event).url).split("/");

				this.pageTitle = title[1].toUpperCase();

			}
		});
  	}
  	ngOnInit(){
  		this.getURL();
  	}
}

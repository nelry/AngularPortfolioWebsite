import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { paths } from './app-paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	pageTitle = "Error";

	constructor(private router: Router) { }

	public getURL(){
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				var title = ((<NavigationEnd>event).url).split("/");

				if (Object.values(paths).includes(title[1])){
					this.pageTitle = title[1].toUpperCase();
				}
				else {
					this.pageTitle = "404";
				}

				if (title[1] === ""){
					this.pageTitle = "HOME";
				}
			}
		});
  	}
  	ngOnInit(){
  		this.getURL();
  	}
}

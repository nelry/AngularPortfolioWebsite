import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	
projects = [
	{
		title: 'Portfolio Website',
		description: 'Developing this website to display my Angular abilities and resume.',
		date: 'Winter 2019 - Ongoing',
		link: '',
	}, 
	{
		title: 'Auto Formatting Tool',
		description: 'Developing a Java program to automatically format Microsoft Word files for publishing.',
		date: 'Spring 2019 - Ongoing',
		link: '',
	}, 
	{
		title: 'Senior Project',
		description: 'Developed unit and integration test suites for fellow students’ senior projects.',
		date: 'Spring 2019',
		link: '',
	}, 
	{
		title: 'Haskell Chess',
		description: 'Learned Hasekell and programmed a chess app in two weeks time.',
		date: 'Spring 2019',
		link: 'https://github.com/prosperi/Chess',
	}, 
	{
		title: 'OS Schedular',
		description: 'Created a schedular to manage threads and processes for Debian in C',
		date: 'Spring 2019',
		link: '',
	}, 
	{
		title: 'Konane AI',
		description: 'Using Python, developed AI to play Konane.',
		date: 'Spring 2018',
		link: '',
	}, 
	{
		title: 'Database Visualizer',
		description: 'Using Ruby and PostgreSQL, created visualizations for contents of a database.',
		date: 'Fall 2017',
		link: '',
	}, 
	{
		title: 'Wildlife Park Simulator',
		description: 'Using Java, created wildlife park simulator.',
		date: 'Fall 2016',
		link: '',
	}, 
]; 

  constructor() { }

  ngOnInit() {
  }

}

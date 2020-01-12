import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

skills = [ 
	{
		name: 'Mac',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Macintosh',
		image: '../../assets/Apple_logo_black.svg',
	}, 
	{
		name: 'Windows',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Microsoft_Windows',
		image: '../../assets/Windows_logo_2012-Black.svg',
	}, 
	{
		name: 'Linux',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Linux',
		image: '../../assets/Tux_Mono.svg',
	}, 
	{
		name: 'Microsoft Word',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Microsoft_Word',
		image: '../../assets/Microsoft_Word_2013_logo.svg',
	}, 
	{
		name: 'Excel',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Microsoft_Excel',
		image: '../../assets/Microsoft_Excel_Logo.svg',
	}, 
	{
		name: 'PowerPoint',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Microsoft_PowerPoint',
		image: '../../assets/Microsoft_PowerPoint_2013_logo.svg',
	}, 
	{
		name: 'Java',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
		image: '../../assets/Java_programming_language_logo.svg',
	}, 
	{
		name: 'JavaScript',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/JavaScript',
		image: '../../assets/Unofficial_JavaScript_logo_2.svg',
	}, 
	{
		name: 'C',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
		image: '../../assets/c-programming-language-seeklogo.com.svg',
	}, 
	{
		name: 'C++',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/C%2B%2B',
		image: '../../assets/ISO_C++_Logo.svg',
	}, 
	{
		name: 'R',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/R_(programming_language)',
		image: '../../assets/R_logo.svg',
	}, 
	{
		name: 'Ruby',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
		image: '../../assets/Ruby_logo.svg',
	}, 
	{
		name: 'Python',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
		image: '../../assets/Python_logo_and_wordmark.svg',
	}, 
	{
		name: 'Angular',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
		image: '../../assets/Angular_full_color_logo.svg',
	},
	{
		name: 'Haskell',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Haskell_(programming_language)',
		image: '../../assets/Haskell-Logo.svg',
	}, 
	{
		name: 'Autodesk Inventor Professional',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Autodesk_Inventor',
		image: '../../assets/Autodesk_Logo.svg',
	}, 
	{
		name: 'MatLab',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/MATLAB',
		image: '../../assets/Matlab_Logo.png',
	}, 
	{
		name: 'Adobe Photoshop',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Adobe_Photoshop',
		image: '../../assets/Adobe_Photoshop_CC_icon.svg',
	}, 
	{
		name: 'Looker',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/Looker_(company)',
		image: '../../assets/Looker.png',
	}, 
	{
		name: 'MongoDB',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/MongoDB',
		image: '../../assets/MongoDB-Logo.svg',
	}, 
	{
		name: 'SQL',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/SQL',
		image: '../../assets/Cloud-SQL-Logo.svg',
	}, 
	{
		name: 'SQLite',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/SQLite',
		image: '../../assets/SQLite370.svg',
	}, 
	{
		name: 'MySQL',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/MySQL',
		image: '../../assets/MySQL.svg',
	}, 
	{
		name: 'PostgreSQL',
		description: 'Description to come.',
		link: 'https://en.wikipedia.org/wiki/PostgreSQL',
		image: '../../assets/Postgresql_elephant.svg',
	}, 

	];

  constructor() { }

  ngOnInit() {
  }

}

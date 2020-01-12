import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'projects', component: ProjectsComponent},
	{path: 'experience', component: ExperienceComponent},
	{path: 'skills', component: SkillsComponent},
	{path: 'education', component: EducationComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
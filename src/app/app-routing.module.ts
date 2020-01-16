import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { paths } from './app-paths';

const routes: Routes = [
	{path: paths.home, component: HomeComponent},
	{path: paths.about, component: AboutComponent},
	{path: paths.projects, component: ProjectsComponent},
	{path: paths.experience, component: ExperienceComponent},
	{path: paths.skills, component: SkillsComponent},
	{path: paths.education, component: EducationComponent},
	{path: '', redirectTo: paths.home, pathMatch: 'full'},
	{path: '**', component: NotFoundComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
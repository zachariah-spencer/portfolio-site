import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ResumeComponent } from './home/resume/resume.component';

const routes: Routes = [

  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

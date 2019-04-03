import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FailedToFindComponent } from './failed-to-find/failed-to-find.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full'}, //landing path
  {path: 'heroes', component:HeroesComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '**', component: FailedToFindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

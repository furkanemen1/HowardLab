import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalEducationComponent } from './container/global-education/global-education.component';

const routes: Routes = [
  {path: 'main', component: GlobalEducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

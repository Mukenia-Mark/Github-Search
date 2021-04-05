import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';
import {RepositoryComponent} from './repository/repository.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'user', component: UserComponent},
  {path:'repository', component: RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

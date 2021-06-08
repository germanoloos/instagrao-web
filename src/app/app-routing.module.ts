import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'user',
  loadChildren: () => import('@app/modules/user/user-routing.module').then((b) => b.UserRoutingModule)
},
{
  path: '',
  loadChildren: () => import('@app/modules/posts/posts-routing.module').then((b) => b.PostsRoutingModule)
},
{
  path: 'login',
  redirectTo: 'user/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

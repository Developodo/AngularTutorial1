import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { Error404Component } from './pages/error404/error404.component';
import { SubaComponent } from './pages/a/suba/suba.component';
import { SubbComponent } from './pages/a/subb/subb.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {path:'a',component:AComponent,
  children:[
    {path:'suba', component:SubaComponent},
    {path:'subb',component:SubbComponent},
    {path:'**',redirectTo:'/a/suba', pathMatch:'full'}
  ],
  canActivate:[GuardGuard]},
  {path:'b/:id/:page',loadComponent:()=> import('./pages/b/b.component').then(m=>m.BComponent)},
  {path:'',redirectTo:'/a', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[{
    path:'',
    component:SidebarComponent,
  },
  {
    path:'mainscreen',
    component:MainscreenComponent,
  }]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }

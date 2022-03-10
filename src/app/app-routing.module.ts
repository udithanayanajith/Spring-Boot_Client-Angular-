import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',redirectTo:"view", pathMatch:"full" 
  },
  {
    path:"reg",component:RegComponent
  },
  {
    path:"view",component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

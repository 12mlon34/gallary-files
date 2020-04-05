
import { FilesComponent } from './files/files.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"gallary" , component :GallaryComponent
  },
  {
    path:"file" , component :FilesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

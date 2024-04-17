import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingDataComponent } from './painting-data/painting-data.component';

const routes: Routes = [
  { path: '', component: PaintingDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { SearchItemComponent } from './search-item/search-item.component';


const routes: Routes = [
  { path: '', component: AddItemComponent, pathMatch: 'full' },
  { path: 'search', component: SearchItemComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

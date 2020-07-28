import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NmComponent } from '../nm/nm.component';
import { AgComponent } from '../ag/ag.component';
import { LasComponent } from '../las/las.component';


const routes: Routes = [{path: 'name', component: NmComponent},
{path: 'age', component: AgComponent},
  {path: 'last', component :LasComponent},
  {path: '**', redirectTo:'name'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
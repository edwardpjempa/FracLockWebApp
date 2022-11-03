import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WellPressureComponent } from './well-pressure/well-pressure.component';
import { FHEComponent } from './fhe/fhe.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  { path: 'FHE/WellPressure', component: FHEComponent},
  {path: '', component: SystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  WellPressureComponent,
  FHEComponent,
   SystemComponent
]
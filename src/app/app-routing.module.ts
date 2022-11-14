import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WellPressureComponent } from './well-pressure/well-pressure.component';
import { SystemComponent } from './system/system.component';
import { QuickTestComponent } from './quick-test/quick-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { SettingsComponent } from './settings/settings.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  
  { path: '', component: HomePageComponent },
  { path: 'userList', component: UserListComponent},
  { path: 'addUser', component: AddUserComponent},
  {
    path: 'device/:device',
    children: [      { path: '', component: WellPressureComponent },
    { path: 'WellPressure', component: WellPressureComponent },
    { path: 'QuickTest', component: QuickTestComponent },
    { path: 'Auxiliary', component: AuxiliaryComponent},
    { path: 'SystemStatus', component: SystemStatusComponent},
    { path: 'Settings', component: SettingsComponent},
    { path: 'Alarms', component: AlarmsComponent},
  ],
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

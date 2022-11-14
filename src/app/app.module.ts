import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WellPressureComponent } from './well-pressure/well-pressure.component';
import { FHEComponent } from './fhe/fhe.component';
import { SystemComponent } from './system/system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickTestComponent } from './quick-test/quick-test.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SetPressureComponent } from './set-pressure/set-pressure.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { SettingsComponent } from './settings/settings.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { HomePageNavBarComponent } from './home-page-nav-bar/home-page-nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddUserComponent } from './add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    WellPressureComponent,
    SystemComponent,
    QuickTestComponent,
    PageNotFoundComponent,
    SetPressureComponent,
    HomePageComponent,
    AuthComponent,
    NavBarComponent,
    AuxiliaryComponent,
    SystemStatusComponent,
    SettingsComponent,
    AlarmsComponent,
    HomePageNavBarComponent,
    UserListComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    NgxChartsModule,
    AppRoutingModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

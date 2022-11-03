import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellPressureComponent } from './well-pressure/well-pressure.component';
import { FHEComponent } from './fhe/fhe.component';
import { SystemComponent } from './system/system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickTestComponent } from './quick-test/quick-test.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FHEComponent,
    SystemComponent,
    QuickTestComponent,
    WellPressureComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

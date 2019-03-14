import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './partials/logo/logo.component';
import { AudioService } from './service/audio.service';
import { InfoService } from './service/info.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './partials/time/time.component';
import { ExpressionMenuComponent } from './partials/expression-menu/expression-menu.component';
import { ExpressionService } from './service/expression.service';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TimeComponent,
    ExpressionMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AudioService, InfoService, ExpressionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

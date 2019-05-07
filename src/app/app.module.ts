import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ExpressionListComponent } from './partials/expression-list/expression-list.component';
import { TimeAgoPipe } from "time-ago-pipe";
import { ProgramInfoComponent } from './partials/program-info/program-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TimeComponent,
    ExpressionMenuComponent,
    ExpressionListComponent,
    TimeAgoPipe,
    ProgramInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AudioService, InfoService, ExpressionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

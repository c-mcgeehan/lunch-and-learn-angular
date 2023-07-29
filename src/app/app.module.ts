import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/observables/intro/intro.component';
import { SubjectsComponent } from './components/observables/subjects/subjects.component';
import { AsyncPipeComponent } from './components/observables/async-pipe/async-pipe.component';
import { SubscriptionsComponent } from './components/observables/subscriptions/subscriptions.component';
import { FinalComponent } from './components/observables/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SubjectsComponent,
    AsyncPipeComponent,
    SubscriptionsComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

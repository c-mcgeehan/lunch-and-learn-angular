import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/observables/intro/intro.component';
import { SubjectsComponent } from './components/observables/subjects/subjects.component';
import { AsyncPipeComponent } from './components/observables/async-pipe/async-pipe.component';
import { SubscriptionsComponent } from './components/observables/subscriptions/subscriptions.component';
import { PipesComponent } from './components/common-concepts/pipes/pipes.component';
import { DirectivesComponent } from './components/common-concepts/directives/directives.component';
import { QuickOverviewComponent } from './components/common-concepts/quick-overview/quick-overview.component';
import { FormsModule } from '@angular/forms';
import { NumberWordPipe } from './pipes/number-word.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { ColorHoverDirective } from './directives/color-hover.directive';
import { ReactiveFormsComponent } from './components/common-concepts/reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SubjectsComponent,
    AsyncPipeComponent,
    SubscriptionsComponent,
    PipesComponent,
    DirectivesComponent,
    QuickOverviewComponent,
    NumberWordPipe,
    ColorHoverDirective,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

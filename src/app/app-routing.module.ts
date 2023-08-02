import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/common-concepts/directives/directives.component';
import { PipesComponent } from './components/common-concepts/pipes/pipes.component';
import { QuickOverviewComponent } from './components/common-concepts/quick-overview/quick-overview.component';
import { ReactiveFormsComponent } from './components/common-concepts/reactive-forms/reactive-forms.component';
import { IntroComponent } from './components/observables/intro/intro.component';

const routes: Routes = [
  {
    path: 'overview',
    component: QuickOverviewComponent,
  },
  {
    path: 'observables/intro',
    component: IntroComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
  },
  {
    path: '**',
    redirectTo: 'overview',
    //redirectTo: redirect to another route, common use is to redirect to a default route.
    //canActivate: Runs to determine if the route can be activated, could include something like a role/claim check from something that implements CanActivate.
    //data: Static data desired to be passed to the route.
    //resolve: A resolver, something that retrieves data to activate the route.
    //runGuardsAndResolvers: Rules on when to run the guards and resolvers before the component is loaded (how to protect a route and load data), otherwise always run on activation.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

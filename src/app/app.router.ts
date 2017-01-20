import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'inicio' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'galeria' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'contacto' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);

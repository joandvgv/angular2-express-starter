import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'inicio' },
  { loadChildren: 'app/gallery/gallery.module#GalleryModule', path: 'galeria' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'contacto' },
  { loadChildren: 'app/citas/citas.module#CitasModule', path: 'cita' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);

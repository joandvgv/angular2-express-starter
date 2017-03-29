import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CitasComponent } from './citas.component';

const routes: Route[] = [
  {
    path: '',
    component: CitasComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

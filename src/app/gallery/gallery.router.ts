import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GalleryComponent } from './gallery.component';

const routes: Route[] = [
  {
    path: '',
    component: GalleryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

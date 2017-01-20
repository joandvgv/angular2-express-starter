import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    GalleryComponent
  ],
  bootstrap: [
    GalleryComponent
  ]
})
export class GalleryModule {}
